import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { createSessionInsecure } from '../../../../database/sessions';
import {
  User,
  getUserWithPasswordHashByEmailInsecure,
} from '../../../../database/users';
import { userSchema } from '../../../../migrations/00000-createTableUsers';
import { secureCookieOptions } from '../../../../util/cookies';

export type LoginResponseBodyPost =
  | {
      user: Pick<User, 'email'>;
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<LoginResponseBodyPost>> {
  // 1. Get the user data from the request
  const body = await request.json();

  // 2. Validate the user data with zod
  const result = userSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.issues },
      {
        status: 400,
      },
    );
  }

  // 3. verify the user credentials
  const userWithPasswordHash = await getUserWithPasswordHashByEmailInsecure(
    result.data.email,
  );

  if (!userWithPasswordHash) {
    return NextResponse.json(
      {
        errors: [{ message: 'email or password not valid' }],
      },
      { status: 403 },
    );
  }

  // 4. Validate the user password by comparing with hashed password
  const isPasswordValid = await bcrypt.compare(
    result.data.password,
    userWithPasswordHash.passwordHash,
  );

  if (!isPasswordValid) {
    return NextResponse.json(
      { errors: [{ message: 'email or password not valid' }] },
      {
        status: 401,
      },
    );
  }

  // At this stage we already confirm that the user is who they say they are
  // 5. Create a token
  const token = crypto.randomBytes(100).toString('base64');

  // 6. Create the session record
  const session = await createSessionInsecure(userWithPasswordHash.id, token);

  if (!session) {
    return NextResponse.json(
      { errors: [{ message: 'Error creating the new session' }] },
      {
        status: 401,
      },
    );
  }

  // 7. Send the new cookie in the headers

  cookies().set({
    name: 'sessionToken',
    value: session.token,
    ...secureCookieOptions,
  });

  // 8. Return the new user information without the password hash
  return NextResponse.json({
    user: {
      email: userWithPasswordHash.email,
    },
  });
}

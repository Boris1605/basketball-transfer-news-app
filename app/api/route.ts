import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createTransfer } from '../../database/transfers';

type RootResponseBodyGet = {
  teams: string;
};

export function GET(): NextResponse<RootResponseBodyGet> {
  return NextResponse.json({
    teams: '/api/teams',
  });
}

// Validation schema for request body
const userSchema = z.object({
  name: z.string(),
});

type RootResponseBodyPost =
  | {
      teams: string;
    }
  | {
      error: string;
    };

type Result = {
  player: string;
  currentTeam: string;
  newTeam: string;
};

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RootResponseBodyPost>> {
  const requestBody = await request.json();

  const result = userSchema.safeParse(requestBody);

  console.log('validation result', result);

  // If client sends request body with incorrect data,
  // return a response with a 400 status code to the client
  if (!result.success) {
    // error.issues [
    //   {
    //     code: 'invalid_type',
    //     expected: 'string',
    //     received: 'undefined',
    //     path: [ 'name' ],
    //     message: 'Required'
    //   }
    // ]
    console.log('error.issues', result.error.issues);

    return NextResponse.json(
      {
        error:
          'You need to send an object with a "name" property, eg { "name": "Abby"} ',
      },
      {
        status: 400,
      },
    );
  }

  // console.log('good data', result.data);

  // console.log('POST request body requestJson.name', result.data.name);
  const newTransfer = await createTransfer(
    result.data.player,
    result.currentTeam,
    result.newTeam,
  );

  console.log(newTransfer);

  return NextResponse.json({
    teams: '/api/teams',
  });
}

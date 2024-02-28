import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

type RootResponseBodyGet = {
  teams: string;
};

export function GET(): NextResponse<RootResponseBodyGet> {
  return NextResponse.json({
    teams: '/api/teams',
  });
}

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

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RootResponseBodyPost>> {
  const requestBody = await request.json();

  const result = userSchema.safeParse(requestBody);

  console.log('validation restult', result);

  if (!result.success) {
    console.log('error.issues', result.error.issues);
    return NextResponse.json(
      {
        error:
          'You need to send an object with a "team" property, eg { "team": "Denver Nuggets"} ',
      },
      {
        status: 400,
      },
    );
  }

  console.log('good data', result.data);

  // console.log('POST request body requestJson.team', result.data.team);

  return NextResponse.json({
    teams: '/api/teams',
  });
}

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { createTeam } from '../../../database/teams';
import { Team, teamSchema } from '../../../migrations/00002-createTableTeams';

// type TeamsResponseBodyGet = {
//   teams: Team[];
// };

// export async function GET(): Promise<NextResponse<TeamsResponseBodyGet>> {
//   const teams = await getTeams();
//   return NextResponse.json({
//     teams: teams,
//   });
// }

type TeamsResponseBodyPost =
  | {
      team: Team;
    }
  | {
      error: string;
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<TeamsResponseBodyPost>> {
  const requestBody = await request.json();

  const result = teamSchema.safeParse(requestBody);

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
        error: 'Request does not contain team object',
        errorIssues: result.error.issues,
      },
      {
        status: 400,
      },
    );
  }

  const sessionTokenCookie = cookies().get('sessionToken');

  const newTeam =
    sessionTokenCookie &&
    (await createTeam(sessionTokenCookie.value, {
      id: result.data.id,
      conference: result.data.conference,
      division: result.data.division,
      city: result.data.city,
      name: result.data.name,
      fullName: result.data.fullName,
    }));

  if (!newTeam) {
    return NextResponse.json(
      {
        error: 'Team not created or access denied creating team',
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    team: newTeam,
  });
}

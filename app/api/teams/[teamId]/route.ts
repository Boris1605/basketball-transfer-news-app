import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { deleteTeam } from '../../../../database/teams';
import { Team } from '../../../../migrations/00002-createTableTeams';

type TeamParams = {
  params: {
    teamId: string;
  };
};

// type TeamResponseBodyGet =
//   | { error: string }
//   | {
//       team: Team;
//     };

// // WARNING: You probably don't need this, because you can just do
// // a database query directly in your Server Component
// export async function GET(
//   request: NextRequest,
//   { params }: TeamParams,
// ): Promise<NextResponse<TeamResponseBodyGet>> {
//   const team = await getTeam(Number(params.teamId));

//   if (!team) {
//     return NextResponse.json(
//       {
//         error: "Team doesn't exist",
//       },
//       { status: 404 },
//     );
//   }

//   return NextResponse.json({
//     team: team,
//   });
// }

// type TeamResponseBodyPut =
//   | { error: string }
//   | {
//       team: Team;
//     };

// WARNING: You probably don't need this, because you can just do
// a database query directly in your Server Component
// export async function PUT(
//   request: NextRequest,
//   { params }: TeamParams,
// ): Promise<NextResponse<TeamResponseBodyPut>> {
//   const requestBody = await request.json();

//   const result = teamSchema.safeParse(requestBody);

//   // If client sends request body with incorrect data,
//   // return a response with a 400 status code to the client
//   if (!result.success) {
//     // error.issues [
//     //   {
//     //     code: 'invalid_type',
//     //     expected: 'string',
//     //     received: 'undefined',
//     //     path: [ 'name' ],
//     //     message: 'Required'
//     //   }
//     // ]
//     console.log('error.issues', result.error.issues);

//     return NextResponse.json(
//       {
//         error: 'Request does not contain team object',
//         errorIssues: result.error.issues,
//       },
//       {
//         status: 400,
//       },
//     );
//   }

//   // Try this first:
//   // await createTeamInsecure(result.data);
//   // Now the team update from the dashboard requires the user to be logged in
//   // const updatedTeam = await updateTeamInsecure({
//   //   id: Number(params.teamId),
//   //   firstName: result.data.firstName,
//   //   type: result.data.type,
//   //   accessory: result.data.accessory || null,
//   //   birthDate: result.data.birthDate,
//   // });

//   const sessionTokenCookie = cookies().get('sessionToken');

//   const updatedTeam =
//     sessionTokenCookie &&
//     (await updateTeam(sessionTokenCookie.value, {
//       id: result.data.id,
//       conference: result.data.conference,
//       division: result.data.division,
//       city: result.data.city,
//       name: result.data.name,
//       fullName: result.data.fullName,
//     }));

//   if (!updatedTeam) {
//     return NextResponse.json(
//       {
//         error: 'Team not found or access denied updating team',
//       },
//       { status: 500 },
//     );
//   }

//   return NextResponse.json({
//     team: updatedTeam,
//   });
// }

type TeamResponseBodyDelete =
  | { error: string }
  | {
      team: Team;
    };

// WARNING: You probably don't need this, because you can just do
// a database query directly in your Server Component
export async function DELETE(
  request: NextRequest,
  { params }: TeamParams,
): Promise<NextResponse<TeamResponseBodyDelete>> {
  // Now the team delete from the dashboard requires the user to be logged in
  // const team = await deleteTeamInsecure(Number(params.teamId));

  const sessionTokenCookie = cookies().get('sessionToken');

  const team =
    sessionTokenCookie &&
    (await deleteTeam(sessionTokenCookie.value, Number(params.teamId)));

  if (!team) {
    return NextResponse.json(
      {
        error: 'Team not found or access denied deleting team',
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    team: team,
  });
}

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createTransfer, getTransfers } from '../../../database/transfers';

// Validation schema for request body
const transferSchema = z.object({
  player: z.string(),
  currentTeam: z.string(),
  newTeam: z.string(),
});

type TransferData = z.infer<typeof transferSchema>;

export async function GET(): NextResponse<{ transfers }> {
  const transfers = await getTransfers();
  console.log('Transfering', transfers);
  return NextResponse.json({
    // transfers: 'transfers',
    transfers: transfers,
  });
}

export async function POST(
  request: NextRequest,
): Promise<NextResponse<{ transfers: string } | { error: string }>> {
  const requestBody = await request.json();

  const result = transferSchema.safeParse(requestBody);

  console.log('validation result', result);

  // If client sends request body with incorrect data,
  // return a response with a 400 status code to the client
  if (!result.success) {
    console.log('error.issues', result.error.issues);
    return NextResponse.json(
      {
        error:
          'You need to send an object with "player", "currentTeam", and "newTeam" properties.',
      },
      {
        status: 400,
      },
    );
  }

  console.log('good data', result.data);

  // Here you can store the transfer data in your preferred database
  // Example: MongoDB, MySQL, etc.
  // For demonstration purposes, we'll just log the data
  console.log('Transfer created:', result.data);

  await createTransfer(
    result.data.player,
    result.data.currentTeam,
    result.data.newTeam,
  );

  return NextResponse.json({
    transfers: '/api/transfers',
  });
}

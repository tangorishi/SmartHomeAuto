// app/api/user-data/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  const userId = 'newuser'; // Replace this with dynamic user ID if needed

  try {
    const user = await prisma.user.findUnique({
      where: { userId },
      include: {
        residences: {
          include: {
            rooms: {
              include: {
                appliances: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
    });
  }
}

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main(){
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'jdoe@example.com',
      avatarUrl: 'https://github.com/raffaez.png',
    }
  });

  const pool = await prisma.pool.create({
    data: {
      title: 'Example Pool',
      code: 'BOL123',
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id,
        }
      }
    }
  });

  await prisma.game.create({
    data: {
      date: '2022-11-05T18:00:00.191Z',
      firstTeamCountryCode: 'DK',
      secondTeamCountryCode: 'JP'
    }
  });

  await prisma.game.create({
    data: {
      date: '2022-11-06T15:00:00.191Z',
      firstTeamCountryCode: 'BR',
      secondTeamCountryCode: 'AR',

      guesses: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 1,

          participant: {
            connect: {
              userId_poolId:  {
                userId: user.id,
                poolId: pool.id
              }
            }
          }
        }
      }
    }
  });

}

main();
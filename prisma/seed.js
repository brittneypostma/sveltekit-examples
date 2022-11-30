import PrismaClientPkg from '@prisma/client'

const PrismaClient = PrismaClientPkg.PrismaClient
const prisma = new PrismaClient()

export const getUsers = () => {
	return [
		{
			username: 'alice',
			avatar: 'https://avatars.githubusercontent.com/u/1863771?v=4',
			password: 'password',
			todos: {
        create: [
          {
            title: 'Buy milk',
            completed: false
          },
          {
            title: 'Buy eggs',
            completed: false
          }
        ]
      }
    },
		{
			username: 'johndoe',
			avatar: 'https://i.imgur.com/7G4J4k4.png',
			password: 'password',
			todos: {
        create: [
          {
            title: 'Create a SvelteKit app',
            completed: false
          },
          {
            title: 'Create a Prisma app',
            completed: false
          },
          {
            title: 'Connect Prisma to SvelteKit',
            completed: false
          }
        ]
      }
    },
		{
			username: 'bob',
			avatar: 'https://avatars.githubusercontent.com/u/1863771?v=4',
			password: 'password',
			todos: {
        create: [
          {
            title: 'Buy milk',
            completed: false
          },
          {
            title: 'Buy eggs',
            completed: false
          }
			  ]
		  }
    }
	];
};


async function seed() {
	const users = getUsers();

	for (const user of users) {
		await prisma.user.create({ data: user });
	}
}

seed();

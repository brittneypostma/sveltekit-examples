# Setting up Prisma

Prisma always you to connect and update your database using JavaScript, without needing to know the specific database syntax. To create a project with Prisma from scratch, first decide what datasource you are going to use. I'm going to use sqlite because it stores the database file right on your system. Run this command in the terminal to initialize Prisma with a sqlite db.

```npx prisma init --datasource-provider sqlite``` 

The next step is to decide what you are building and setup the data models for your application in the `schema.prisma` file that was generated. These represent and map to the items that will be stored in your database and are the basis of the queries Prisma generates. Read more about [Prisma models here](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model). We'll be building a todo app with authentication so we need a `User` and a `Task` model.

```
model User {
  id       Int    @id @default(autoincrement())
  username String @unique
  token    String @unique
  avatar   String
  password String
  todos    Todo[]
}

model Todo {
  User      User?   @relation(fields: [userId], references: [id])
  id        Int     @id @default(autoincrement())
  title     String
  userToken String
  completed Boolean
  userId    Int?
}
```

Save the file and run the following command in the terminal.

```npx prisma db push```

You should see a message saying `Your database is now in sync with your Prisma schema.` This generates a `dev.db` file in your `prisma` directory that is your database file. You can open it with a sqlite viewer like [DB Browser for SQLite](https://sqlitebrowser.org/). Delete the file if you want to start over. And it is a good idea to go ahead and add the file to your `.gitignore` file so you don't accidentally make your database available to the public.

```
# .gitignore
prisma/dev.db
```

Now we need to install the Prisma client that will allow us to connect to the database and run queries. Run the following command in the terminal.

```npm install @prisma/client```

If you make changes to your `schema.prisma` file, you will need to manually run the following command to update the Prisma client and the code it generates.

```npx prisma generate```

The last thing to think about is adding data to start with. You can do this manually by adding rows to the database file, but it is much easier to use [Prisma's seeding feature](https://www.prisma.io/docs/guides/database/seed-database). Create a new file in the `prisma` directory called `seed.js` and add the following code.

```js
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
```

Add a seed script to your `package.json` file.

```
  "prisma": {
    "seed": "node prisma/seed.js"
  },
```

Then run the following command in the terminal to seed the database.

```npx prisma db seed```


To explore the newly created and seeded database, Prisma has a built in GUI that you can run with the following command.

```npx prisma studio```
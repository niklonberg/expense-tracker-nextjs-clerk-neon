import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export async function checkUser() {
  const user = await currentUser();

  // check for current logged in clerk user
  if (!user) return null;

  // check if that user is already in our db
  const loggedInUser = await db.user.findUnique({
    where: { clerkUserId: user.id },
  });

  // if user is in our db, return them
  if (loggedInUser) return loggedInUser;

  // if not in database, add them to our db as a new user
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
}

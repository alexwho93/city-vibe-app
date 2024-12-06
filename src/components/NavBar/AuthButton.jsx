import { Button } from "@mui/material";
import { auth, signIn, signOut } from "@/services/auth";

export default async function AuthButton() {
  const session = await auth();

  console.log("Session:", JSON.stringify(session, null, 2));

  async function handleSignIn() {
    "use server";
    await signIn();
  }

  async function handleSignOut() {
    "use server";
    await signOut();
  }

  return (
    <form action={session ? handleSignOut : handleSignIn}>
      <Button type="submit" variant="contained" color="primary">
        {session ? "Logout" : "Login"}
      </Button>
    </form>
  );
}

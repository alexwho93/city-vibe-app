import React from "react";
import SignIn from "@/components/Auth/SignIn";
import { auth } from "@/services/auth";
import { redirect } from "next/navigation";

async function Login() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <>
      <SignIn />
    </>
  );
}

export default Login;

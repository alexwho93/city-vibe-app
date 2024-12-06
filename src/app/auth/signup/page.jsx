import React from "react";
import SignUp from "@/components/Auth/SignUp";
import { auth } from "@/services/auth";
import { redirect } from "next/navigation";

async function SignupPage() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <>
      <SignUp />
    </>
  );
}

export default SignupPage;

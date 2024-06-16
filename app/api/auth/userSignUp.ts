"use server";

import { supabase, prisma } from "@/app/api/auth/index";
import { SignUpType } from "@/app/types/authType";

export async function signUpNewUser({ email, password, name }: SignUpType) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "http://localhost:3000/login",
    },
  });
  if (error) {
    return {
      data: error,
      message: "User creation failed",
    };
  }
  await prisma.user.create({
    data: {
      email: email,
      name: name,
    },
  });
  return {
    data: data?.user,
    message: "User created successfully",
  };
}

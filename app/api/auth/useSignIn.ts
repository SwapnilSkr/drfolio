import { supabase } from "@/app/api/auth/index";
import { SignInType } from "@/app/types/authType";

export async function signInWithEmail({ email, password }: SignInType) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    return {
      data: error,
      message: "User sign in failed",
    };
  }
  return {
    data: data?.user,
    message: "User signed in successfully",
  };
}

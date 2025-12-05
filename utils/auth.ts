import { supabase } from "./supabase";
import { UserProps } from "@/types/types";

export type LoginProp = {
  email: string;
  password: string;
};

export const createUser = async ({
  email,
  password,
  phoneNumber,
  country,
  fullName,
}: UserProps) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    phone: phoneNumber,
    options: {
      data: {
        country: country,
        fullName: fullName,
      },
    },
  });
  return data;
};

export const LoginUser = async ({ email, password }: LoginProp) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // console.error("Login failed:", error.message);
    return { success: false, error };
  }

  // console.log("Login successful:", data);
  return { success: true, data };
};

export const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return;
  } else {
    return data;
  }
};

export const forgotPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "(auth)/new-password",
  });
  if (error) {
    console.log("Supabase Error:", error.message);
    return;
  }

  return data;
};

export const resetPassword = async (new_password: string) => {
  const { data, error } = await supabase.auth.updateUser({
    password: new_password,
  });
  if (error) {
    console.log("Supabase Error:", error.message);
    return;
  }

  return data;
};

import axios from "axios";
import { UserProps } from "@/types/types";

const BACKEND_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const apiKey = "AIzaSyAUWNTrQOTIEu5zk5dIOvKt8F_eiORgovA";
const LOGIN_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

export const signupUser = async ({
  fullName,
  email,
  password,
  phoneNumber,
  country,
}: UserProps) => {
  const data = await axios.post(BACKEND_URL + apiKey, {
    fullName: fullName,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    country: country,
  });
  console.log(data);

  return data;
};

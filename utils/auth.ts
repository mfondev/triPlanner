import axios from "axios";

const BACKEND_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const apiKey = "AIzaSyAUWNTrQOTIEu5zk5dIOvKt8F_eiORgovA";
const LOGIN_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

export async function createUser(
  fullname: string,
  email: string,
  password: string,
  phoneNumber: string,
  country: string
) {
  const response = await axios.post(BACKEND_URL + apiKey, {
    fullname:fullname,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    country: country,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}
export async function loginUser(email: string, password: string) {
  const response = await axios.post(LOGIN_URL + apiKey, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = response.data.idToken;
  return token;
}

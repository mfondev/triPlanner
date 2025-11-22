import { supabase } from "./supabase";

export type PassengerProp = {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  nationality: string;
  dob: string;
  passNumber: number;
  issuedDate: string;
  expiryDate: string;
};

export async function addPassenger(dataProp: PassengerProp) {
  const { data, error } = await supabase.from("passengers").insert(dataProp);
}

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
  const { data, error } = await supabase.from("passengers").insert([dataProp]).select();
  console.log(data);

  if (error) {
    console.log("Supabase Error:", error.message);
    return;
  }
  return data;
}

export async function getPassengers() {
  const { data, error } = await supabase.from("passengers").select("*");

  if (error) {
    console.log("Supabase Error:", error.message);
    return;
  }
  return data;
}

export async function getPassengerById(id: number) {
  const { data, error } = await supabase
    .from("passengers")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log("Supabase Error:", error.message);
    return;
  }
  return data;
}
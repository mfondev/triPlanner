import { supabase } from "./supabase";

export async function flights() {
  const { data, error } = await supabase.from("countries").select("*");
  if (error) {
    console.log("error:", error);
    return;
  } else {
    return data;
  }
}

export async function destinations() {
  const { data, error } = await supabase
    .from("countries")
    .select("departure_location", );
  if (error) {
    console.log("error:", error);
    return;
  } else {
    return data;
  }
}

export async function arrivals() {
  const { data, error } = await supabase
    .from("countries")
    .select("arrival_location", );
  if (error) {
    console.log("error:", error);
    return;
  } else {
    return data;
  }
}

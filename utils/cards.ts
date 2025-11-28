import { supabase } from "./supabase";

export type CardProp = {
  card_number: number;
  cvv: number;
  name: string;
  exp_date: string;
};

export const addCard = async (cardData: CardProp) => {
  const { data, error } = await supabase
    .from("cards")
    .insert([cardData])
    .select();
  if (error) {
    console.log("Supabase Error:", error.message);
    return;
  } else {
    console.log(data);
    return data;
  }
};

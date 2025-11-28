import { supabase } from "./supabase";

export type CardProp = {
  card_number: string;
  cvv: string;
  name: string;
  exp_date: string;
  card_type: string
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

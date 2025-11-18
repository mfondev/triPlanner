import "expo-sqlite/localStorage/install";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://euofmejbzyjxfnyqphns.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1b2ZtZWpienlqeGZueXFwaG5zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTA2MzkxMywiZXhwIjoyMDc2NjM5OTEzfQ.lHS7D3QVuQYzA6FK_-aS7wEP_ONzUJ7dpIOdRMphXgg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// console.log(supabase);


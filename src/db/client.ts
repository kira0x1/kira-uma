import { createClient } from "@supabase/supabase-js";

const config = {
    url: import.meta.env?.VITE_SUPABASE_URL,
    key: import.meta.env?.VITE_SUPABASE_ANON_KEY
}

export const client = createClient(config.url, config.key);

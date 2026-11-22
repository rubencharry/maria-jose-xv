import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);

export interface Familia {
  id: string;
  nombre: string;
}

export interface Integrante {
  id: string;
  familia_id: string;
  nombre: string;
}

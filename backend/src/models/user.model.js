import { supabase } from '../config/supabase.js';

export async function findAll() {
  const { data, error } = await supabase.from('users').select('*');
  if (error) throw error;
  return data;
}

export async function insert({ email, name }) {
  const { data, error } = await supabase.from('users').insert([{ email, name }]).select().single();

  if (error) throw error;
  return data;
}

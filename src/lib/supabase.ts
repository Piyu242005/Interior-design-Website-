import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image_url: string;
  featured: boolean;
  created_at: string;
};

export type Testimonial = {
  id: string;
  client_name: string;
  client_title: string;
  content: string;
  rating: number;
  image_url: string;
  featured: boolean;
  created_at: string;
};

export type ContactSubmission = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

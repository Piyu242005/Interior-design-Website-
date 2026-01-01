import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a mock client that returns empty data when Supabase is not configured
const createMockClient = () => ({
  from: () => ({
    select: () => ({
      eq: () => ({
        limit: () => Promise.resolve({ data: [], error: null }),
      }),
      order: () => ({
        limit: () => Promise.resolve({ data: [], error: null }),
      }),
      limit: () => Promise.resolve({ data: [], error: null }),
    }),
    insert: () => Promise.resolve({ data: null, error: null }),
  }),
});

export const supabase: SupabaseClient | ReturnType<typeof createMockClient> = 
  supabaseUrl && supabaseAnonKey 
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createMockClient() as any;

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

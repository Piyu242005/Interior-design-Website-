/*
  # D NEST Interior Design Studio Database Schema

  1. New Tables
    - `portfolio_items`
      - `id` (uuid, primary key)
      - `title` (text)
      - `category` (text) - e.g., 'residential', 'commercial', 'renovation'
      - `description` (text)
      - `image_url` (text)
      - `featured` (boolean) - whether to show on homepage
      - `created_at` (timestamptz)
    
    - `testimonials`
      - `id` (uuid, primary key)
      - `client_name` (text)
      - `client_title` (text) - e.g., 'CEO, Company'
      - `content` (text)
      - `rating` (integer) - 1-5 stars
      - `image_url` (text) - optional client photo
      - `featured` (boolean)
      - `created_at` (timestamptz)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `message` (text)
      - `status` (text) - 'new', 'contacted', 'closed'
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for portfolio and testimonials
    - Authenticated insert for contact submissions
*/

CREATE TABLE IF NOT EXISTS portfolio_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  description text DEFAULT '',
  image_url text NOT NULL,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_title text DEFAULT '',
  content text NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5) DEFAULT 5,
  image_url text DEFAULT '',
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view portfolio items"
  ON portfolio_items FOR SELECT
  USING (true);

CREATE POLICY "Public can view testimonials"
  ON testimonials FOR SELECT
  USING (true);

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);
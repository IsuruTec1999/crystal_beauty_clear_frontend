/*
  # Create Reviews Table

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key) - Unique identifier for each review
      - `name` (text) - Customer name
      - `email` (text) - Customer email
      - `rating` (integer) - Rating from 1 to 5
      - `comment` (text) - Review comment/feedback
      - `product_name` (text) - Optional product name being reviewed
      - `created_at` (timestamptz) - Timestamp when review was created
      - `approved` (boolean) - Whether review is approved for display

  2. Security
    - Enable RLS on `reviews` table
    - Add policy for anyone to read approved reviews
    - Add policy for anyone to insert reviews (moderation through approved flag)
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  product_name text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  approved boolean DEFAULT false
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read approved reviews"
  ON reviews
  FOR SELECT
  USING (approved = true);

CREATE POLICY "Anyone can submit reviews"
  ON reviews
  FOR INSERT
  WITH CHECK (true);
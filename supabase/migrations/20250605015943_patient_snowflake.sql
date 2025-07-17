/*
  # Create contact forms table

  1. New Tables
    - `contact_forms`
      - `id` (uuid, primary key)
      - `name` (text)
      - `company` (text)
      - `email` (text)
      - `service` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `status` (text)

  2. Security
    - Enable RLS on `contact_forms` table
    - Add policy for inserting new contact forms
*/

CREATE TABLE IF NOT EXISTS contact_forms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact forms"
  ON contact_forms
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view contact forms"
  ON contact_forms
  FOR SELECT
  TO authenticated
  USING (true);
-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Allow anonymous inserts to contacts" ON public.contacts;
DROP POLICY IF EXISTS "Allow anonymous inserts to academy_registrations" ON public.academy_registrations;

-- Ensure tables exist and match the expected schema
-- Added IF NOT EXISTS and ensuring column names match the server actions
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT,
    service TEXT NOT NULL,
    budget TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'resolved'))
);

CREATE TABLE IF NOT EXISTS public.academy_registrations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    course TEXT NOT NULL,
    experience TEXT NOT NULL, -- Renamed from experience_level to experience to match server action
    message TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected'))
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.academy_registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon and authenticated) to insert (public form submissions)
-- Using TO anon, authenticated to ensure submissions work regardless of session state
CREATE POLICY "Allow public inserts to contacts" 
ON public.contacts FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Allow public inserts to academy_registrations" 
ON public.academy_registrations FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Allow authenticated users (admin) to view/manage
CREATE POLICY "Allow authenticated users to view contacts" 
ON public.contacts FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Allow authenticated users to view academy_registrations" 
ON public.academy_registrations FOR SELECT 
TO authenticated 
USING (true);

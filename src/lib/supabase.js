import { createClient } from '@supabase/supabase-js'

// Demo configuration - replace with your actual Supabase project details
const supabaseUrl = 'https://demo.supabase.co'
const supabaseKey = 'demo-key'

export const supabase = createClient(supabaseUrl, supabaseKey)
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lnlniigodawxdepxrorq.supabase.co'
const supabaseKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxubG5paWdvZGF3eGRlcHhyb3JxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyMzM3NTcsImV4cCI6MjAxNzgwOTc1N30.1d01efjXKCJcKPg0sFwPv-FI7tHDtGhxR84ShhmE294'

export const supabase = createClient(supabaseUrl, supabaseKey);

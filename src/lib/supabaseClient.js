
import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase URL and Key
const supabaseUrl = 'https://aacisxtmxxnuijoniaaw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhY2lzeHRteHhudWlqb25pYWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0NTY5NjIsImV4cCI6MjA4MzAzMjk2Mn0.XXnH-Jna_qzooRdfEWAICvl9A5SgxAg5oDR3TDIk2II';

export const supabase = createClient(supabaseUrl, supabaseKey);

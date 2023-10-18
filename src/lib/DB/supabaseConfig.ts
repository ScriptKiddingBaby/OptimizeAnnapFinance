import { createClient } from "@supabase/supabase-js";

export const supabase = createClient("https://aritmjndldlhjuevgtiv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyaXRtam5kbGRsaGp1ZXZndGl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMDc3MzIsImV4cCI6MjAxMjU4MzczMn0.ZLESyTS2DFbDUnHWvMS-c1SrZuA4vkg9tq-diH0JK84");
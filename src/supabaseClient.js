import { createClient } from '@supabase/supabase-js'

// Replace the strings below with your actual Supabase Project details
const supabaseUrl = 'https://wlipykzhlysdkwtqfcbl.supabase.co'
const supabaseAnonKey = 'sb_publishable_j4y_edxMfOj8Is31ZnmPnw_HmqiY9uc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

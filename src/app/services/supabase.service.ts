import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
@Injectable({
    providedIn: 'root'
})
export class SupabaseService {
    supabase = createClient(
        'https://gaytpgbkljqbbewsndgx.supabase.co',
        'sb_publishable_Jp5n8Q5n1F7pwY_iKBchXQ_zDEm3Unm'
    );
}
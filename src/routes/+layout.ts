import { supabase } from "$lib/DB/supabaseConfig";
import { json } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";
import type { UnitsTypes } from "$lib/types";
import type { PostgrestSingleResponse } from "@supabase/supabase-js";

export const load: LayoutLoad = async () => {
    const repoTable:PostgrestSingleResponse<UnitsTypes[]> = await supabase.from("repo_tb").select("*");

    if(repoTable.data){
        return {
            item: repoTable.data
        }
    }
};
import type { PageLoad } from "./$types";
import { supabase } from "$lib/DB/supabaseConfig";
import type { PostgrestSingleResponse, UserResponse } from "@supabase/supabase-js";
import type { UsersTB } from "$lib/types";

export const load: PageLoad = async () => {
    const getUser: UserResponse = await supabase.auth.getUser();
    if(getUser.data.user){
        const users_tb:PostgrestSingleResponse<UsersTB[]> = await supabase.from("users_tb").select("*").eq("uid", getUser.data.user.id);
        if(users_tb.data){
            if(users_tb.data[0]){
                return {
                    userInfo: getUser.data.user,
                    isAdmin: users_tb.data[0].is_admin,
                    uid: users_tb.data[0].uid,
                }
            }else{
                /**ERRPR HERE */
            }
        }else{
            /**ERROR HERE */
        }
    }else{
        /**ERROR HERE */
    }
};
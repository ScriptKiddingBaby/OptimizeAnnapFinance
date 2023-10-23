import {writable} from "svelte/store";
import { supabase } from "$lib/DB/supabaseConfig";

export const loginLogics = writable({
    showLogin: false,
    showRegister: false,
    showForgotPassword: false,
    hasUser: false,
    hasAdmin: false,

    signIn: async (email: string, password: string) => 
    {
        return await supabase.auth.signInWithPassword({email: email,password: password});
        
    },

    signUp: async (email: string, password: string, displayName: string) => 
    {
        return await supabase.auth.signUp({email: email, password: password, options: {data: {displayName: displayName, normal: false}}});
        
    },

    forgotPassword: async (email: string) =>
    {
        return await supabase.auth.resetPasswordForEmail(email);
    },

    logout: async () => 
    {
        return await supabase.auth.signOut();
    },

    getUser: async () =>
    {
        return await supabase.auth.getUser();
    }


    
});





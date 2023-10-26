import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import  Jwt  from "jsonwebtoken";

export const load: PageServerLoad = async ({cookies}) => {
    

    if(cookies.get("authToken")){
        Jwt.verify(cookies.get("authToken") as string, "OnkZrqBPwDSwaLJXGnytqcGQVmTgmkogP5ygQQyzABhLP1uCGAOi0Rq75xeCIFcNfhaycD6gORBxc5WzL41kyg==", (error, token) => {
            if(error){
                throw redirect(302, "/Talk-With-Us/Login")
            }
        })
    }else{
        throw redirect(302, "/Talk-With-Us/Login")
    }

};
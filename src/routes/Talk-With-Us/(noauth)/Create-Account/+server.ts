import { json, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({request, cookies}) =>
{
    const {authToken} = await request.json();

    if(request.headers.get("authorization") === `Bearer ${authToken}`){
        cookies.set("authToken", authToken, {httpOnly: true, maxAge: 60 * 60, sameSite: "strict"});
        return json("success");
    }

    return json("success");
}
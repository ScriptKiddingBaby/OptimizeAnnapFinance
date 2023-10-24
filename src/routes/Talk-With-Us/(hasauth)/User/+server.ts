import { json, type RequestHandler } from "@sveltejs/kit";


export const POST: RequestHandler = async ({request, cookies}) =>
{
    const {authToken} = await request.json();

    cookies.delete(authToken);

    return json("success")
}
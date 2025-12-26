import { LocalStorage } from "node-localstorage";
import { GraphQLError } from "graphql";
import {tokenResp} from '../types/types'
import dotenv from 'dotenv';
dotenv.config();
const localStorage = new LocalStorage('./scratch');
localStorage.clear();
const client_id: String | undefined = process.env.CLIENT_ID || '';
const client_secret: String | undefined = process.env.CLIENT_SECRET || '';
if (client_id == '' || client_secret == '') throw new GraphQLError('Invalid api keys', {
        extensions : {
            code: 'INVALID',
            status: {code: 401}
        }
    }
)
export async function apiToken(): Promise<{data: string, ok: Boolean} | {code: number, msg: string, ok: Boolean}> {

    let response;
    const prevToken = localStorage.getItem('token');
    console.log(prevToken);
    if (prevToken != undefined)
    {
        return {data: prevToken, ok: true};
    }
    const authResponse = await fetch("https://oauth.battle.net/token", 
    {
        method: "POST",
        headers: 
        {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
    })

    if (!authResponse.ok)
    {
        response =  {code: authResponse.status, msg: authResponse.statusText, ok: false}
    }
    ;   
    const token = await authResponse.json() as tokenResp;
    response = token.access_token;
    localStorage.setItem('token', token.access_token);                
    return {data: response, ok: true};
    


}
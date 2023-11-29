import { decode } from "https://deno.land/x/djwt@v2.4/mod.ts";

export function getUserIdFromHeaders(headers: Headers){

    const authorization = headers.get("Authorization");
    const jwt = authorization.split(" ")[1];
    let [,payload,] = decode(jwt)


    return payload.id
}

export function getUserInfoFromHeaders(headers: Headers){

    const authorization = headers.get("Authorization");
    const jwt = authorization.split(" ")[1];
    let [,payload,] = decode(jwt)


    return payload
}

export function displayNumber(number, fixed = 2) {
    return number.toFixed(fixed);
}

export function calculateTimeDifferentInMinutes(time) {
    return (Date.now() - time) / (60 * 1000)
}
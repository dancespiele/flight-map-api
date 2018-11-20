import {Response} from "express";

/**
 * handler response
 * @param code Code status
 * @param res Response express object
 * @param body Content of response
 * @param message message to log
 */
export const handler = (code: number, res: Response, body?: any, message?: string) => {
    if(body) {
        console.log(body);
    }

    if (message && !code.toString().match(/(^4|^5)/)){
        console.error(message);
        res.status(code).send(message);
    } else {
        if (message) console.log(message);
        console.log(body);
        res.status(code).send(body);
    }
}
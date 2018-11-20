import {Express} from "express";
import * as request from "request-promise";
import { handler } from "../../modules/handlers";

export const flightNear = (app: Express) => {
    app.get("/flightnear/:lat/:long/:rad", async (req, res) => {
        let url;
        if(req.params.lat && req.params.long && req.params.rad) {
            const lat = req.params.lat;
            const long = req.params.long;
            const rad = req.params.rad;

            url = `https://api.flightstats.com/flex/flightstatus/rest/v2/json/flightsNear` +
                `/${lat}/${long}/${rad}`;
        }

        const headers = {
            Accept: "application/json",
            appId: process.env.APP_ID,
            appKey: process.env.APP_KEY,
        };

        console.log(`request to ${url}`);

        try {
            if (url) {
                const response = await request(url, { json: true, headers });
                handler(200, res, response);
            } else {
                handler(500, res, null, "Missing parameters");
            }
        } catch (error) {
            handler(500, res, null, error.message);
        }

    });
}

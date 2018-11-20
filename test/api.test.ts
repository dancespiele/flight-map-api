import * as dotenv from "dotenv";
import * as fs from "fs";
import "reflect-metadata";
const path = `${__dirname}/.env.test`;

if (fs.existsSync(path)) {
    dotenv.config({path});
}

import * as bodyparser from "body-parser";
import * as express from "express";
import * as Code from "code";
import * as Lab from "lab";
import * as request from "supertest";
import {endpoints} from "../api/endpoints";


const lab = Lab.script();

export {lab};

lab.experiment("flight-map-api", () => {
    let app;

    lab.before(() => {
        app = express();
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({extended: false}));
        endpoints(app);
    });
    lab.test("has to get the flights around", async () => {
        const response = await request(app)
            .get("/flightnear/52.54598/13.42691/25");

        console.log(response.body);
        Code.expect(response.body.flightPositions).have.to.exist();
    });
});

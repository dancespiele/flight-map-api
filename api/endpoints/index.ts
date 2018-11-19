import {Express} from "express";
import {flightNear} from "./flightnear/routes";

export const endpoints = (app: Express) => {
    flightNear(app);
}
import { Router } from 'express';
import bcrypt from "bcrypt";
import Insightify from '../models/Insightify';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const generateToken = (data) => {
    return jwt.sign(
        { data },
        process.env.JWT_SECRET, {
        expiresIn: 604800
    });
}

const insightifyRouter = Router();

insightifyRouter.route('*')
    .all((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Content-Type", "application/json");
        next();
    })

insightifyRouter.route("/")
    .get((req, res) => {
        Insightify.find({}, (err, insightify) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(insightify);
            }
        });
    });


export default insightifyRouter;

import { Router } from 'express';
import bcrypt from "bcrypt";
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const generateToken = (data) => {
    return jwt.sign(
        {data} ,
        process.env.JWT_SECRET, {
        expiresIn: 604800
    });
}

const userRouter = Router();

userRouter.route('*')
    .all((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Content-Type", "application/json");
        next();
    })

userRouter.route("/register")
    .post(async (req, res) => {
        const { email, password, key } = req.body;

        if (key === process.env.LOGIN_KEY) {
            const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
            const user = new User({
                email,
                password: hash
            });

            user.save();
            const token = generateToken(user._id);
            res.status(200).json({
                message: "User created",
                token
            });
        } else {
            res.status(401).json({
                message: "Invalid key"
            });
        }

    });

userRouter.route("/login")
    .post(async (req, res) => {
        const { email, password } = req.body

        const user = await User.findOne({ email }).exec();
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).send({
                    token
                });
            } else {
                res.status(401).send({
                    message: "Invalid password"
                });
            }
        } else {
            res.status(401).send({
                message: "Invalid email"
            });
        }

    });

export default userRouter;

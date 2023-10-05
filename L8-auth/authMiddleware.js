import { users } from "./db.js";
import jwt from "jsonwebtoken"

export default function authMiddleware(req, res, next) {
    const userSentToken = req.headers.authorization?.split(' ')[1]
    if (!userSentToken) return res.status(400).json({ err: 'Token is missing!' })
    jwt.verify(userSentToken, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ err: 'Token is wrong!' })
        } else {
            req.userId = user.id
            next()
        }

    })
}

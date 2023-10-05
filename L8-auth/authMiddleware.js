import jwt from "jsonwebtoken";

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


export function adminMiddleware(req, res, next) {
    const adminSentToken = req.headers.authorization?.split(' ')[1]
    if (!adminSentToken) return res.status(400).json({ err: 'Token is missing!' })

    jwt.verify(adminSentToken, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(400).json({ err: "token is wrong!" })
        }
        const urlContainsAdmin = req.url.includes('/admin')
        if (user.role !== 'admin') {
            if (urlContainsAdmin) {
                return res.status(403).json({ err: 'ay usaq, isinle mesgul ol, emilere ilisme!!' })
            }
            return res.status(403).json({ err: "You're not an admin!" })
        }
        if (urlContainsAdmin && user.role === 'admin') {
            res.isAdmin = true
            next()
        }
    })
}

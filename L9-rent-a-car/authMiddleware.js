import jwt from "jsonwebtoken"

function authMiddleware(req, res, next) {
    console.log(req.headers.authorization)
    const token = req.headers.authorization?.split(' ')[1]
    console.log(token)
    if (!token) {
        return res.status(401).json({ msg: 'token is missing!' })
    }
    jwt.verify(token, 'SECRET', (err, user) => {
        if (err) {
            return res.status(401).json({ msg: "there's an error with token" })
        }
        res.user = user
        next()
    })
}


export default authMiddleware;

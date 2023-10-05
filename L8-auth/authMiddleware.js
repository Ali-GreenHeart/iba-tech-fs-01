export default function authMiddleware(req, res, next) {
    const userSentToken = req.headers?.authorization?.split(' ')[1]
    let token = "ali"; // hard-code
    if (token === userSentToken) {
        next()
    } else {
        return res.status(401).json({ err: 'Wrong credentials!' })
    }
}

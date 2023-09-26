export default function authMiddleware(req, res, next) {
    const secretPart = req.headers?.authorization?.split(' ')[1]
    if (secretPart === 'secret') {
        return next()
    }
    return res.status(401).end("You're not authorized user!")
}

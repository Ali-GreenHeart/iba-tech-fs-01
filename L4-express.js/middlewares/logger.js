export default function (req, res, next) {
    console.log('huhu, im here... ')
    console.log('I was called just before...')
    next()
}

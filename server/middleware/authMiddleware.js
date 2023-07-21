const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        return next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] //Bearer sdfasfacv
        if (!token) {
            return res.status(401).json({ messge: 'Пользователь не авторизован' })
        }
        const decoded = jwt.verify(token, process.env.SEKRET_KEY)
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({ messge: 'Пользователь не авторизован' })
    }
}
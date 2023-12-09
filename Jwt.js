//backend express server
const jwt = require("jsonwebtoken")


const verifyToken = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).send({ error: true, message: "Unauthorized access." })
    }
    const token = authorization.split(" ")[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
        if (error) {
            return res.status(401).send({ error: true, message: "Unauthorized request." })
        }
        req.decoded = decoded;
        next()
    })
}




app.post("/jwt", (req, res) => {
    const userInfo = req.body.email;
    const token = jwt.sign({ userInfo }, process.env.ACCESS_TOKEN, { expiresIn: "2d" })
    res.send({ token })

})



// make random bytes
// require('crypto').randomBytes(64).tostring('hex')  
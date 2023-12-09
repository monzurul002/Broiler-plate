//backend express code
const databaseCollection = client.db("usersDb").collection("user")

//warning:use verifyJWT befor verifyAdmin



app.use("/users/admin/:email", verifyToken, async (req, res) => {
    const email = req.body.email;
    const decodedEmail = req.decoded.user;
    if (email !== decodedEmail) {
        return res.status(401).send({ error: true, admin: false })
    }

    const query = { email }
    const user = await databaseCollection.findOne(query);
    const result = { admin: user?.role === "admin" }
    res.send(result);

})


//makeAdmin
app.patch("/users/admin/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) }
    const updateDoc = {
        $set: {
            role: "admin"
        }
    }
    const result = await databaseCollection.updateOne(filter, updateDoc);
    res.send(result)
})
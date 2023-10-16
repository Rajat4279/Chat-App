const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

//declaration of port number
const port = 4000;

dotenv.config();

const app = express();

app.use(cors({
    origin: ["https://chat-app-backend-kappa.vercel.app"],
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            {
                username: username,
                secret: username,
                first_name: username,
            },
            {
                headers: {
                    "Private-Key": process.env.PRIVATE_KEY
                }
            }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

//listening to port 4000
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})

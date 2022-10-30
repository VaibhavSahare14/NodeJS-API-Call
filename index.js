const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            // console.log(response.data)
            // res.json("UserId: " + response.data[0].userId);
            // res.json(response.data);
            res.json(response.data.map(obj => `ID: ${obj.userId} TITLE: ${obj.title} BODY: ${obj.body}`))
        })
        .catch(function (err) {
            res.json(err);
        });
});

app.listen(PORT, function () {
    console.log(`The Server is up at ${PORT}`);
});
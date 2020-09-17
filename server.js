const express = require('express')
const app = express();

app.listen(3000, () => console.log("bruh"))

app.use(express.static("public"))

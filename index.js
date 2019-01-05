
const express = require('express')
const app = express()

if (process.env.ENV && process.env.ENV !== 'prod-cloud') {
    require('dotenv').config();
}

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello Oren!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const routes = require('./routes/routes')

const port = process.env.PORT || 8080
const app = express()

app,use(cors())
app.use('/', routes)

app.route('/')
    .get((req, res) => {
        res.send('express server working')
    })

app.listen(port ,() => {
    console.log(`Express server started on port ${port}`)
})
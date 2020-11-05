const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const db = require('./config/db')

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`)
})

app.get('/api/:table', (req, res) => {
    db.query(`select * from ${req.params.table}`, (err, data) => {
        if(!err) {
            res.send(data);

        } else {
            console.log(err);
            res.send(err);
        }
    })
})
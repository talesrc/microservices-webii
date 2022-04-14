var express = require('express');

const app = express()

app.listen(3000, () => console.log('Mult'))

app.get('/sub', (req, res) => {
    const op1 = parseFloat(req.query.op1)
    const op2 = parseFloat(req.query.op2)
    res.send((op1 - op2).toString())
})

var express = require('express');

const app = express()

app.listen(3000, () => console.log('Application running at: http://localhost:3000'))

app.get('/mult', (req, res) => {
    const op1 = parseFloat(req.body.op1)
    const op2 = parseFloat(req.body.op2)
    res.send(op1 * op2)
})
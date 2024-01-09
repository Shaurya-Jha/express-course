import express from 'express';

const port = 8000

const app = express();

// routes
app.get('/', (req, res) => {
    res.status(200).send('Welcome')
})

app.get('/api/users', (req, res) => {
    res.send([
        {id:1, name:'anson', displayName:'Anson'},
        {id:2, name:'jack', displayName:'Jack'},
        {id:3, name:'adam', displayName:'Adam'},
    ])
})

app.get('/api/products', (req,res) => {
    res.send([
        {id: 123, name:'chicken breast', price:12.99},
    ])
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
})
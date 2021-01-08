const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors())
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const products = new Map()

products.set(0, {name: 'Overhold', description: 'Some random description1.'})
products.set(1, {name: 'Zamit', description: 'Some random description2.'})
products.set(2, {name: 'Bitchip', description: 'Some random description3.'})
products.set(4, {name: 'Y-find', description: 'Some random description4.'})
products.set(5, {name: 'Zontrax', description: 'Some random description5.'})
products.set(6, {name: 'Tresom', description: 'Some random description6.'})

function createResponse() {
    let data = []
    for (const [key, value] of products)
        data.push({id: key, ...value})
    return {data: data};
}

const getLastKeyInMap = (map) => [...map][map.size-1][0];

app.post('/products', (req, res) => {
    products.set(getLastKeyInMap(products)+1, req.body)
    res.send({})
})

app.get('/products', (req, res) => {
    res.send(createResponse())
})

app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    products.delete(parseInt(id))
    res.send({})
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
import express from 'express'
import { getlcs } from './lcs.js'
import { getKnap } from './knapsack.js'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('This is Keerthi\'s LCS API')
})

app.get('/lcs', (req, res) => {
    const str1 = req.query.str1
    const str2 = req.query.str2
    if (!str1 || !str2) {
        return res.status(400).send('Please provide both str1 and str2 query parameters')
    }   
    const lcsLength = getlcs(str1, str2)
    res.send(`Str1: "${str1}" <br> Str2: "${str2}" <br> LCS is ${lcsLength}`)
})

app.get('/knapsack', (req, res) => {
    const weights = req.query.weights ? req.query.weights.split(',').map(Number) : null
    const values = req.query.values ? req.query.values.split(',').map(Number) : null
    const capacity = req.query.capacity ? parseInt(req.query.capacity) : null
    if (!weights || !values || capacity === null) {
        return res.status(400).send('Please provide weights, values (comma separated) and capacity query parameters')
    }
    if (weights.length !== values.length) {
        return res.status(400).send('Weights and values must have the same length')
    }
    const maxValue = getKnap(weights, values, capacity)
    res.send(`Weights: [${weights}] <br> Values: [${values}] <br> Capacity: ${capacity} <br> Maximum value in Knapsack is ${maxValue}`)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

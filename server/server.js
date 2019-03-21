const express = require('express')

const ac = require('./controllers/AthleteControllers')

const app = express()
const port = 6140

app.use(express.json())

app.get('/api/athletes', ac.get)
app.get('/api/athletes/:gender', ac.getSort)

app.post('/api/athletes/women', ac.createFemale)
app.post('/api/athletes/men', ac.createMale)

app.put('/api/athletes/women/:id', ac.updateFemale)
app.put('/api/athletes/men/:id', ac.updateMale)

app.delete('/api/athletes/women/:id', ac.deleteFemale)
app.delete('/api/athletes/men/:id', ac.deleteMale)



app.listen(port, () => {
    console.log(`listening on ${port}`)
})
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Basic route 
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.get('/api/notes', (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, './db/db.json'), 'utf8');
        console.log(data);
        let dataString = JSON.parse(data);        
        res.json(dataString);
    } catch (err) {
    console.error(err)
    }

})

app.post('/api/notes', (req, res) => {
    fs.writeFileSync('Output.md', README);
// 3 steps: reading, adding, writing
})


// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
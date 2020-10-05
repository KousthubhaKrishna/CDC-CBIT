// Required Imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Database Connection
require("./models/Conn");

// Initialise application 
const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.use(express.json());
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) return res.status(400).send(JSON.stringify({
        error: "Invalid JSON"
    }))
    console.error(err);
    res.status(500).send();
});

// Routes
app.get('/api', (req, res) => {
    res.send("CDC API");
});


// Import Routes
//  const usersRoutes = require('./routes/usersRoutes');
// application.use("/api/users", usersRoutes)

// Handle Production
if(process.env.NODE_ENV=='production'){
    // Static folder
    app.use(express.static(__dirname+'/public/'));

    // Handle SPA
    app.get(/.*/,(req,res)=>res.sendFile(__dirname+'/public/index.html'));
}
// Starting Server to listen 
const port = process.env.PORT || 3080;
app.listen(port, () => {
    console.log('Server started at port: ' + port);
});
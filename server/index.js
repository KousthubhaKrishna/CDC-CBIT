// Required Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { PERMISSIONS, authUser } = require("./middleware/Auth");
var json2xls = require('json2xls');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

// Database Connection
require("./models/Conn");

// Initialise application
const app = express();
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.set('trust proxy', true);
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError)
        return res.status(400).send(
            JSON.stringify({
                error: "Invalid JSON",
            })
        );
    console.error(err);
    res.status(500).send();
});
app.use(json2xls.middleware);

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// Routes
app.get("/api", (req, res) => {
    res.locals.metaTags = {
        title: 'web-push-api',
        description: 'Web Push Notification Full Stack Application With Node Js Restful API',
        keywords: 'Web Push Notification Full Stack Application With Node Js Restful API',
        generator: '0.0.0.1',
        author: 'Kousthubha'
    };
    res.send("CDC API");
});

// Auth Routes
app.use("/api/", require("./routes/authRoutes"));

//Company Routes
app.use("/api/company", require("./routes/companyRoutes"));

//Placements Routes
app.use("/api/placements", require("./routes/placementRoutes"));

//Interview Experience Routes
app.use("/api/interviewExperiences", require("./routes/interviewExperienceRoutes"));

//Students Routes
app.use("/api/students", require("./routes/studentRoutes"));

//Coordinators Routes
app.use("/api/coordinators", require("./routes/coordinatorRoutes"));

//Snapshots Routes
app.use("/api/snaps", require("./routes/snapRoutes"));

//Announcements Routes
app.use("/api/announcements", require("./routes/announcementRoutes"));

app.use("/api/activity", require("./routes/activityRoutes"));

app.use('/api/subscribe/', require("./routes/subscribeRoutes"));

app.use("/api/push", require("./routes/pushRoutes"));

// Handle Production
if (process.env.NODE_ENV == "production") {
    // Static folder
    app.use(express.static(__dirname + "/public/"));
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

// Starting Server to listen
const port = process.env.PORT || 3080;
app.listen(port, () => {
    console.log("Server started at port: " + port);
});

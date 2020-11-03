const express = require("express");
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("Version: 1.0.0");
});

app.get('/healthz', (req, res) => {
    res.status(200).json({status: "OK"});
});

app.get('/readinez', (req, res) => {
    res.status(200).json({status: "OK"});
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
  
const express = require('express');
const app = express();
const port = 8000;

app.use(express.static(__dirname));

const start = async () => {
    try {
        await app.listen(port, console.log(`server listening in port: http://localhost:${port}`));
    }
    catch (err) {
        console.log(err);
    }
};

start();
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.json('Server is running!');
});

const PORT = process.env.BACK_END_PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
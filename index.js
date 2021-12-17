const express = require('express');
const app = require('./app');
const PORT = process.env.PORT


// Creating server
app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}/`);
})

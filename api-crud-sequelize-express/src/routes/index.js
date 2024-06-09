const express = require('express');
const user = require('./userRoute.js');

module.exports = app => {
    app.use(
        express.json(),
        user
    );
}
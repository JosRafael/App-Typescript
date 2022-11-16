import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017');

const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`🤖 Servidor rodando em http://localhost:${port}`);
});








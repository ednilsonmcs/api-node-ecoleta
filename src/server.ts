import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app = express();

// O use é utilizado para adicionar a funcionalidade de interpretação de JSON no nosso servidor (app)
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333)

//npm run dev
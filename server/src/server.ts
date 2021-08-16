import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {connect} from 'mongoose';
import {config} from 'dotenv';

import {AuthRouter} from '@route/authRoute'
import {UserRouter} from '@route/userRoute'


// Dotenv
config();

// Start express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser())


// Conectando ao MongoDB
connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('DB Connection Successfull')).catch((err : any) => {
  console.error(err);
});

// Rotas
app.use("/api/auth", AuthRouter);
app.use("/api/users", UserRouter);


// Porta do servidor
const port = process.env.PORT || 3333;

// Start servidor
app.listen(port, () => {
  console.log('Server rodando na porta', port);
});

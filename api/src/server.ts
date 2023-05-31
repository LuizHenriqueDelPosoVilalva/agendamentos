import express, { Application } from 'express'

import { UsersRoutes } from './routes/users.routers'

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: true})); //essa parte basicamente vai pegar qualquer url que tem expaços e vai preencher

const usersRoutes = new UsersRoutes().getUsers

app.use('/users', usersRoutes)

app.listen(3000, () => console.log("server is running"))
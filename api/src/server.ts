import express, { Application, NextFunction, Request, Response } from 'express'
import { UsersRouters } from './routes/UsersRouters'

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: true})); //essa parte basicamente vai pegar qualquer url que tem expaços e vai preencher

const usersRoutes = new UsersRouters().getUsers

app.use('/users', usersRoutes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return response.status(400).json({
      message: err.message
    })
  }
  return response.status(500).json({
    message: "Internal Server Error "
  })
})

app.listen(3000, () => console.log("server is running"))
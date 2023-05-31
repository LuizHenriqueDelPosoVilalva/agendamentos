import { Router } from 'express'
import { UsersControllers } from '../controllers/UsersControllers'

class UsersRouters {
  private router: Router
  private userControllers: UsersControllers
  constructor() {
    this.router = Router();
    this.userControllers = new UsersControllers()
  }
  getUsers() {
    this.router.post
    ('/', 
      this.userControllers.store.bind(this.userControllers)
    );
    return this.router
  }
}

export { UsersRouters }
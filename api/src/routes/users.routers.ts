import { Router } from 'express'

class Users {
  private router: Router
  constructor() {
    this.router = Router(); 
  }
  getUsers() {
    this.router.post('/user', )
  }
}
import {makeAutoObservable} from 'mobx'

class UserStore {
  isAuth = false
  role = ''
  idUser = ''

  constructor() {
    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this.isAuth = bool
  }
  setRole(role) {
    this.role = role
  }

  setId(id) {
    this.idUser = id
  }

  get isAdmin() {
    return this.role === 'ADMIN'
  }

  get isUser() {
    return this.role === 'USER'
  }
}

export default new UserStore()

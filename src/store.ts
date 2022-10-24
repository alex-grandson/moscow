import { makeAutoObservable } from 'mobx'

export class UserAuth {
  login: string = undefined
  sessionId: number = undefined

  constructor() {
    makeAutoObservable(this)
  }
}

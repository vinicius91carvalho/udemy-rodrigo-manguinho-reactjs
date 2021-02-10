import { Authentication } from '@/domain/usecases/authentication'
import { mockAccountModel } from '@/tests/domain/mocks'

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params: Authentication.Params
  callsCount = 0

  async auth (params: Authentication.Params): Promise<Authentication.Result> {
    this.params = params
    this.callsCount++
    return this.account
  }
}

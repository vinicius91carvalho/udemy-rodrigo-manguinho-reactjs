import { AccountModel } from '@/domain/models/account-model'
import { Authentication } from '@/domain/usecases/authentication'
import { AddAccount } from '@/domain/usecases/add-account'
import faker from 'faker'

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAddAccountParams = (): AddAccount.Params => {
  const password = faker.internet.password()
  return {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password,
    passwordConfirmation: password
  }
}

import { AccountModel } from '@/domain/models/account-model'
import { Authentication } from '@/domain/usecases/authentication'
import faker from 'faker'

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

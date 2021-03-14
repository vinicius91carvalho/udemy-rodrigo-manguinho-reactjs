import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'
import env from '@/main/config/env'
import { AddAccount } from '@/domain/usecases'
import { RemoteAddAccount } from '@/data/usecases/remote-add-account'

export const makeRemoteAddAccount = (): AddAccount => {
  return new RemoteAddAccount(`${env.API_URL}/signup`, makeAxiosHttpClient())
}

import { Authentication } from '@/domain/usecases/authentication'
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'
import env from '@/main/config/env'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(env.API_URL, makeAxiosHttpClient())
}

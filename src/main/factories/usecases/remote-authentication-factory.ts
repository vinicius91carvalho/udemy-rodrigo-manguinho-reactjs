import { Authentication } from '@/domain/usecases/authentication'
import { RemoteAuthentication } from '@/data/usecases/remote-authentication'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'
import env from '@/main/config/env'

export const makeRemoteAuthentication = (path: string): Authentication => {
  return new RemoteAuthentication(`${env.API_URL}${path}`, makeAxiosHttpClient())
}

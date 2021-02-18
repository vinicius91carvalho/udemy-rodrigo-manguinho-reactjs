import { HttpPostClient , HttpResponse, HttpStatusCode } from '@/data/protocols/http'
import faker from 'faker'

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  params?: HttpPostClient.Params<T>
  result: HttpResponse<R> = {
    statusCode: HttpStatusCode.OK
  }

  async post (params: HttpPostClient.Params<T>): Promise<HttpPostClient.Result<R>> {
    this.params = params
    return this.result
  }
}

export const mockPostRequest = (): HttpPostClient.Params<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

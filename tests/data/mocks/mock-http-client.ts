import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-response'

export class HttpPostClientSpy implements HttpPostClient {
  params?: HttpPostClient.Params
  result: HttpResponse = {
    statusCode: HttpStatusCode.OK
  }

  async post (params: HttpPostClient.Params): Promise<HttpPostClient.Result> {
    this.params = params
    return this.result
  }
}

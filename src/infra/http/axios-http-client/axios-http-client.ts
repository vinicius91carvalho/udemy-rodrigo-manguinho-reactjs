import { HttpPostClient, HttpResponse } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient<T, R> implements HttpPostClient<T, R> {
  async post (params: HttpPostClient.Params<T>): Promise<HttpResponse<R>> {
    await axios.post(params.url)
    return null
  }
}

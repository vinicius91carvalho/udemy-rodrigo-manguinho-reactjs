import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { UnexpectedError } from '@/domain/errors'
import { AddAccount } from '@/domain/usecases'
import { HttpStatusCode } from '@/data/protocols/http'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AddAccount.Params, AddAccount.Result>
  ) {}

  async add (params: AddAccount.Params): Promise<AddAccount.Result> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}

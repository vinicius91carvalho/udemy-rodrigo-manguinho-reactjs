import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'
import { mockPostRequest } from '@/tests/data/mocks'
import { mockAxios, mockedAxiosResult } from '@/tests/infra/mocks'
import axios from 'axios'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient<any, any>
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct statusCode and body', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.post(mockPostRequest())
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })

  test('Should return the correct statusCode and body on failure', async () => {
    const { sut, mockedAxios } = makeSut()
    mockedAxios.post.mockRejectedValue({
      response: mockedAxiosResult
    })
    const httpResponse = await sut.post(mockPostRequest())
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })
})

import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { Authentication } from '@/domain/usecases/authentication'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
import { HttpPostClientSpy } from '@/tests/data/mocks/mock-http-client'
import { mockAuthentication } from '@/tests/domain/mocks/mock-authentication'
import faker from 'faker'

interface SutTypes {
  httpPostClientSpy: HttpPostClientSpy<Authentication.Params, Authentication.Result>
  sut: RemoteAuthentication
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<Authentication.Params, Authentication.Result>()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.params?.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const authenticationParams = mockAuthentication()
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.params?.body).toEqual(authenticationParams)
  })

  test('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.result = {
      statusCode: HttpStatusCode.UNAUTHORIZED
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.result = {
      statusCode: HttpStatusCode.BAD_REQUEST
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.result = {
      statusCode: HttpStatusCode.NOT_FOUND
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.result = {
      statusCode: HttpStatusCode.SERVER_ERROR
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.result = {
      statusCode: HttpStatusCode.SERVER_ERROR
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})

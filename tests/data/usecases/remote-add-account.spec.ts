import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { RemoteAddAccount } from '@/data/usecases/remote-add-account'
import { EmailInUseError, UnexpectedError } from '@/domain/errors'
import { AddAccount } from '@/domain/usecases/add-account'
import { HttpPostClientSpy } from '@/tests/data/mocks'
import { mockAccountModel, mockAddAccountParams } from '@/tests/domain/mocks'
import faker from 'faker'

interface SutTypes {
  httpPostClientSpy: HttpPostClientSpy<AddAccount.Params, AddAccount.Result>
  sut: AddAccount
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AddAccount.Params, AddAccount.Result>()
  const sut = new RemoteAddAccount(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAddAccount', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.add(mockAddAccountParams())
    expect(httpPostClientSpy.params?.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const addAccountParams = mockAddAccountParams()
    await sut.add(addAccountParams)
    expect(httpPostClientSpy.params?.body).toEqual(addAccountParams)
  })

  test('Should throw EmailInUseError if HttpPostClient returns 403', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.result = {
      statusCode: HttpStatusCode.FORBIDDEN
    }
    const promise = sut.add(mockAddAccountParams())
    await expect(promise).rejects.toThrow(new EmailInUseError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.result = {
      statusCode: HttpStatusCode.BAD_REQUEST
    }
    const promise = sut.add(mockAddAccountParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.result = {
      statusCode: HttpStatusCode.NOT_FOUND
    }
    const promise = sut.add(mockAddAccountParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.result = {
      statusCode: HttpStatusCode.SERVER_ERROR
    }
    const promise = sut.add(mockAddAccountParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return an AccountModel if HttpPostClient returns 200', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const accountModel = mockAccountModel()
    httpPostClientSpy.result = {
      statusCode: HttpStatusCode.OK,
      body: accountModel
    }
    const account = await sut.add(mockAddAccountParams())
    await expect(account).toEqual(accountModel)
  })
})

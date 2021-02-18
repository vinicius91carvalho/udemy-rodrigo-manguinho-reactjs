import { RemoteAddAccount } from '@/data/usecases/remote-add-account'
import { AddAccount } from '@/domain/usecases/add-account'
import { HttpPostClientSpy } from '@/tests/data/mocks'
import { mockAddAccountParams } from '@/tests/domain/mocks'
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
})

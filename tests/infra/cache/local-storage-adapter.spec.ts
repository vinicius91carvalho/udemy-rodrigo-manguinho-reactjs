import { LocalStorageAdapter } from '@/infra/cache/local-storage-adapter'
import faker from 'faker'
import 'jest-localstorage-mock'

const makeSut = (): LocalStorageAdapter => new LocalStorageAdapter()

describe('LocalStorageAdapter', () => {
  test('Should call localStorage with correct values', async () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.random.objectElement()
    await sut.set({
      key,
      value
    })
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
  })
})

import { LocalSaveAccessToken } from '@/data/usecases/local-save-access-token'
import { SetStorageMock } from '@/tests/data/mocks/mock-cache'
import faker from 'faker'

type SutTypes = {
  setStorageMock: SetStorageMock
  sut: LocalSaveAccessToken
}

const makeSut = (): SutTypes => {
  const setStorageMock = new SetStorageMock()
  const sut = new LocalSaveAccessToken(setStorageMock)

  return {
    sut,
    setStorageMock
  }
}

describe('LocalSaveAccessToken', () => {
  test('Should call SetStorage with correct value', async () => {
    const { sut,setStorageMock: setStorageSpy } = makeSut()
    const accessToken = faker.random.uuid()
    await sut.save({ accessToken })
    expect(setStorageSpy.params.key).toBe('@surveys:accessToken')
    expect(setStorageSpy.params.value).toBe(accessToken)
  })

  test('Should throw if SetStorage throws', async () => {
    const { sut,setStorageMock: setStorageSpy } = makeSut()
    jest.spyOn(setStorageSpy, 'set').mockRejectedValueOnce(new Error())
    const promise = sut.save({ accessToken: faker.random.uuid() })
    await expect(promise).rejects.toThrow(new Error())
  })
})

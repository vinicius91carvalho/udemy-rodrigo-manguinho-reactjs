import { LocalSaveAccessToken } from '@/data/usecases/local-save-access-token'
import faker from 'faker'
import { SetStorageSpy } from '@/tests/data/mocks/mock-storage'

describe('LocalSaveAccessToken', () => {
  test('Should call SetStorage with correct value', async () => {
    const setStorageSpy = new SetStorageSpy()
    const sut = new LocalSaveAccessToken(setStorageSpy)
    const accessToken = faker.random.uuid()
    await sut.save(accessToken)
    expect(setStorageSpy.params.key).toBe('accessToken')
    expect(setStorageSpy.params.value).toBe(accessToken)
  })
})

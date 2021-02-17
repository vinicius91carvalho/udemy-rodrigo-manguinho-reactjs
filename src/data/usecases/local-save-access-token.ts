import { SaveAccessToken } from '@/domain/usecases'
import { SetStorage } from '@/data/protocols/storage/set-storage'

export class LocalSaveAccessToken implements SaveAccessToken {
  constructor (private readonly setStorage: SetStorage) {}

  async save ({ accessToken }: SaveAccessToken.Params): Promise<void> {
    await this.setStorage.set({
      key: '@surveys:accessToken',
      value: accessToken
    })
  }
}

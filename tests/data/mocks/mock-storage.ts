import { SetStorage } from '@/data/protocols/storage/set-storage'
import { SaveAccessToken } from '@/domain/usecases'

export class SetStorageMock implements SetStorage {
  params: SetStorage.Params
  async set (params: SetStorage.Params): Promise<SetStorage.Result> {
    this.params = params
  }
}

export class SaveAccessTokenMock implements SaveAccessToken {
  params: SaveAccessToken.Params
  async save (params: SaveAccessToken.Params): Promise<void> {
    this.params = params
  }
}

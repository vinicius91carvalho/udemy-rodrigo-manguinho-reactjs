import { SetStorage } from '@/data/protocols/storage/set-storage'

export class SetStorageMock implements SetStorage {
  params: SetStorage.Params
  async set (params: SetStorage.Params): Promise<SetStorage.Result> {
    this.params = params
  }
}

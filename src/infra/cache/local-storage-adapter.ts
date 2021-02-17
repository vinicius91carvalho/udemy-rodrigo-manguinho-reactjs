import { SetStorage } from '@/data/protocols/storage/set-storage'

export class LocalStorageAdapter implements SetStorage {
  async set ({ key, value }: SetStorage.Params): Promise<SetStorage.Result> {
    localStorage.setItem(key, value)
  }
}

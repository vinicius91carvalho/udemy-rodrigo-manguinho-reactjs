export interface SetStorage {
  set: (params: SetStorage.Params) => Promise<SetStorage.Result>
}

export namespace SetStorage {
  export type Params = {
    key: string
    value: string
  }
  export type Result = Promise<void>
}

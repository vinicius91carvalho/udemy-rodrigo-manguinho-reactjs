export interface SaveAccessToken {
  save: (params: SaveAccessToken.Params) => Promise<void>
}

export namespace SaveAccessToken {
  export type Params = {
    accessToken: string
  }
}

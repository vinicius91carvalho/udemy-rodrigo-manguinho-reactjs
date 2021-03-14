export interface Validation {
  validate: (params: Validation.Params) => Validation.Result
}

export namespace Validation {
  export type Params = {
    fieldName: string
    input: object
  }
  export type Result = string
}

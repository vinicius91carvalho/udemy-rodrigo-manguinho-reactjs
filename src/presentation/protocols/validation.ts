export interface Validation {
  validate: (params: Validation.Params) => Validation.Result
}

export namespace Validation {
  export type Params = {
    fieldName: string
    fieldValue: string
  }
  export type Result = string
}

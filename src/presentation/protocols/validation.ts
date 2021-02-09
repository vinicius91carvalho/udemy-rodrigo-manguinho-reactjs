export interface Validation {
  validate: (input: Validation.Params) => Validation.Result
}

export namespace Validation {
  export type Params = object
  export type Result = string
}

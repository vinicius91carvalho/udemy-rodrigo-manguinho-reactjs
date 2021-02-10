export interface FieldValidation {
  field: string
  validate: (params: FieldValidation.Params) => FieldValidation.Result
}

export namespace FieldValidation {
  export type Params = {
    value: string
  }
  export type Result = Error
}

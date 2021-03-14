import { FieldValidation } from '@/validation/protocols'

export class FieldValidationSpy implements FieldValidation {
  result: FieldValidation.Result = null
  params: FieldValidation.Params
  constructor (readonly field: string) {}

  validate ({ input }: FieldValidation.Params): FieldValidation.Result {
    this.params = { input }
    return this.result
  }
}

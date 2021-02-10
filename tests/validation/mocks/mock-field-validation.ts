import { FieldValidation } from '@/validation/protocols'

export class FieldValidationSpy implements FieldValidation {
  error: Error = null
  params: FieldValidation.Params
  constructor (readonly field: string) {}

  validate ({ value }: FieldValidation.Params): FieldValidation.Result {
    this.params = { value }
    return this.error
  }
}

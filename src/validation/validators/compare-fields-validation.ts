import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import { FieldValidation } from '@/validation/protocols'

export class CompareFieldsValidation implements FieldValidation {
  constructor (
    readonly field: string,
    private readonly fieldToCompare: string
  ) {

  }

  validate ({ input }: FieldValidation.Params): FieldValidation.Result {
    return input[this.field] !== input[this.fieldToCompare] ? new InvalidFieldError() : null
  }
}

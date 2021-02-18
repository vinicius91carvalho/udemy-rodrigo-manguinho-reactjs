import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import { FieldValidation } from '@/validation/protocols'

export class CompareFieldsValidation implements FieldValidation {
  constructor (
    readonly field: string,
    private readonly valueToCompare: string
  ) {

  }

  validate ({ value }: FieldValidation.Params): FieldValidation.Result {
    return new InvalidFieldError()
  }
}

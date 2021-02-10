import { FieldValidation } from '@/validation/protocols'
import { RequiredFieldError } from '@/validation/errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {

  }

  validate ({ value }: FieldValidation.Params): FieldValidation.Result {
    return value ? null : new RequiredFieldError()
  }
}

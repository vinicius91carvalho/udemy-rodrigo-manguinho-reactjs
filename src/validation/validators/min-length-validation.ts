import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}

  validate ({ value }: FieldValidation.Params): FieldValidation.Result {
    return value.length >= this.minLength ? null : new InvalidFieldError()
  }
}

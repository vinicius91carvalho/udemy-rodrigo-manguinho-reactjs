import { FieldValidation } from '@/validation/protocols'
import { InvalidFieldError } from '@/validation/errors'

export class EmailValidation implements FieldValidation {
  constructor (readonly field: string) {}
  validate ({ value }: FieldValidation.Params): Error {
    return new InvalidFieldError()
  }
}

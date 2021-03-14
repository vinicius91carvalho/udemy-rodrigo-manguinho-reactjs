import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}

  validate ({ input }: FieldValidation.Params): FieldValidation.Result {
    return input[this.field]?.length < this.minLength ? new InvalidFieldError() : null
  }
}

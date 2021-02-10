import { Validation } from '@/presentation/protocols'
import { FieldValidation } from '@/validation/protocols'

export class ValidationComposite implements Validation {
  constructor (private readonly validators: FieldValidation[]) {}
  validate ({ fieldName, fieldValue }: Validation.Params): Validation.Result {
    const validators = this.validators.filter(v => v.field === fieldName)
    for (const validator of validators) {
      const error = validator.validate({ value: fieldValue })
      if (error) {
        return error.message
      }
    }
  }
}

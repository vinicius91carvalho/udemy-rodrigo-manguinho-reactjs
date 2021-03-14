import { EmailValidation, MinLengthValidation, RequiredFieldValidation } from '@/validation/validators'
import { FieldValidation } from '@/validation/protocols'
import { CompareFieldsValidation } from '@/validation/validators/compare-fields-validation'

export class ValidationBuilder {
  private constructor (
    private readonly fieldName: string,
    private readonly validations: Map<string, FieldValidation>
  ) {}

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, new Map())
  }

  required (): ValidationBuilder {
    this.validations.set('RequiredFieldValidation', new RequiredFieldValidation(this.fieldName))
    return this
  }

  email (): ValidationBuilder {
    this.validations.set('EmailValidation', new EmailValidation(this.fieldName))
    return this
  }

  min (length: number): ValidationBuilder {
    this.validations.set('MinLengthValidation', new MinLengthValidation(this.fieldName, length))
    return this
  }

  sameAs (fieldToCompare: string): ValidationBuilder {
    this.validations.set('CompareFieldsValidation', new CompareFieldsValidation(this.fieldName, fieldToCompare))
    return this
  }

  build (): FieldValidation[] {
    return Array.from(this.validations.values())
  }
}

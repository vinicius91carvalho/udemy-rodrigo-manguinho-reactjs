import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from '@/validation/validators'

describe('EmailFieldValidation', () => {
  test('Should return error if email is invalid', () => {
    const sut = new EmailValidation('email')
    const error = sut.validate({ value: '' })
    expect(error).toEqual(new InvalidFieldError())
  })
})

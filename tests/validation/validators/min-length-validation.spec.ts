import { MinLengthValidation } from '@/validation/validators'
import { InvalidFieldError } from '@/validation/errors'

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const sut = new MinLengthValidation('field', 5)
    const error = sut.validate({ value: '123' })
    expect(error).toEqual(new InvalidFieldError())
  })
})

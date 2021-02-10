import { MinLengthValidation } from '@/validation/validators'

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const sut = new MinLengthValidation('field', 5)
    const error = sut.validate({ value: '12345' })
    expect(error).toBeFalsy()
  })
})

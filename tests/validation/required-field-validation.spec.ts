import { RequiredFieldError } from '@/validation/errors'
import { RequiredFieldValidation } from '@/validation/required-field-validation'
import faker from 'faker'

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate({ value: '' })
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is not empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate({ value: faker.random.word() })
    expect(error).toBeFalsy()
  })
})

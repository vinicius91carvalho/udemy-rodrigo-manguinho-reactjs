import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from '@/validation/validators'
import faker from 'faker'

describe('EmailFieldValidation', () => {
  test('Should return error if email is invalid', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate({ value: faker.random.word() })
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if email is valid', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate({ value: faker.internet.email() })
    expect(error).toBeFalsy()
  })
})

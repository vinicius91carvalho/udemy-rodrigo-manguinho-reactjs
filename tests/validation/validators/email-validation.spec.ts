import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from '@/validation/validators'
import faker from 'faker'

const makeSut = (): EmailValidation => new EmailValidation(faker.random.word())

describe('EmailFieldValidation', () => {
  test('Should return error if email is invalid', () => {
    const sut = makeSut()
    const error = sut.validate({ value: faker.random.word() })
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if email is valid', () => {
    const sut = makeSut()
    const error = sut.validate({ value: faker.internet.email() })
    expect(error).toBeFalsy()
  })
})

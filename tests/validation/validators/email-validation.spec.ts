import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from '@/validation/validators'
import faker from 'faker'

const makeSut = (field: string): EmailValidation => new EmailValidation(field)

describe('EmailFieldValidation', () => {
  test('Should return error if email is invalid', () => {
    const field = faker.random.word()
    const sut = makeSut(field)
    const error = sut.validate({ input: { [field]: faker.random.word() } })
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if email is valid', () => {
    const field = faker.random.word()
    const sut = makeSut(field)
    const error = sut.validate({ input: { [field]: faker.internet.email() } })
    expect(error).toBeFalsy()
  })

  test('Should return falsy if email is empty', () => {
    const field = faker.random.word()
    const sut = makeSut(field)
    const error = sut.validate({ input: { [field]: '' } })
    expect(error).toBeFalsy()
  })
})

import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from '@/validation/validators'
import faker from 'faker'

const makeSut = (field: string): MinLengthValidation => new MinLengthValidation(field, 5)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ input: { [field]: faker.random.alphaNumeric(4).toString() } })
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if value is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ input: { [field]: faker.random.alphaNumeric(5) } })
    expect(error).toBeFalsy()
  })

  test('Should return falsy if field does not exist in schema', () => {
    const sut = makeSut(faker.database.column())
    const error = sut.validate({ input: {} })
    expect(error).toBeFalsy()
  })
})

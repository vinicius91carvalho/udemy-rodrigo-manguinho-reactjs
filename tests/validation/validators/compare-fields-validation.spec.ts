import { CompareFieldsValidation } from '@/validation/validators/compare-fields-validation'
import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'

const makeSut = (field: string, fieldToCompare: string): CompareFieldsValidation => new CompareFieldsValidation(field, fieldToCompare)

describe('CompareFieldsValidation', () => {
  test('Should return error if compare is invalid', () => {
    const field = faker.random.word()
    const fieldToCompare = faker.random.word()
    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({
      input: {
        [field]: faker.random.word(),
        [fieldToCompare]: faker.random.word()
      }
    })
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if compare is valid', () => {
    const field = faker.random.word()
    const fieldToCompare = faker.random.word()
    const sut = makeSut(field, fieldToCompare)
    const value = faker.random.word()
    const error = sut.validate({
      input: {
        [field]: value,
        [fieldToCompare]: value
      }
    })
    expect(error).toBeFalsy()
  })
})

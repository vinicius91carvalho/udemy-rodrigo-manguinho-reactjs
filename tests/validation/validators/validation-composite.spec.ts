import { ValidationComposite } from '@/validation/validators'
import { FieldValidationSpy } from '@/tests/validation/mocks'
import faker from 'faker'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string = faker.database.column()): SutTypes => {
  const fieldValidationsSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName)
  ]
  const sut = new ValidationComposite(fieldValidationsSpy)
  return {
    sut,
    fieldValidationsSpy
  }
}

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut, fieldValidationsSpy } = makeSut(fieldName)
    const errorMessage = faker.random.words()

    fieldValidationsSpy[0].result = new Error(errorMessage)
    fieldValidationsSpy[1].result = new Error(faker.random.words())

    const error = sut.validate({
      fieldName,
      fieldValue: faker.random.words()
    })

    expect(error).toBe(errorMessage)
  })
})

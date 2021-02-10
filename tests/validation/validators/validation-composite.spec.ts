import { ValidationComposite } from '@/validation/validators'
import { FieldValidationSpy } from '@/tests/validation/mocks'
import faker from 'faker'

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const fieldName = faker.database.column()
    const errorMessage = faker.random.words()

    const fieldValidationSpy = new FieldValidationSpy(fieldName)
    fieldValidationSpy.error = new Error(errorMessage)
    const fieldValidationSpy2 = new FieldValidationSpy(fieldName)
    fieldValidationSpy2.error = new Error(faker.random.words())

    const sut = new ValidationComposite([
      fieldValidationSpy,
      fieldValidationSpy2
    ])

    const error = sut.validate({
      fieldName,
      fieldValue: faker.random.words()
    })

    expect(error).toBe(errorMessage)
  })
})

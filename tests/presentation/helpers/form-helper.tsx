import { fireEvent, RenderResult } from '@testing-library/react'
import faker from 'faker'

export const testChildCount = (sut: RenderResult, testId: string, count: number): void => {
  const element = sut.getByTestId(testId)
  expect(element.childElementCount).toBe(count)
}

export const testButtonIsDisabled = (sut: RenderResult, testId: string, isDisabled: boolean): void => {
  const element = sut.getByTestId(testId) as HTMLButtonElement
  expect(element.disabled).toBe(isDisabled)
}

export const testStatusForField = (sut: RenderResult, testId: string, validationError?: string): void => {
  const elementStatus = sut.getByTestId(`${testId}-status`)
  expect(elementStatus.title).toBe(validationError || 'Tudo certo!')
  expect(elementStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

export const populateField = (sut: RenderResult, testId: string, value = faker.random.word()): void => {
  const elementInput = sut.getByTestId(testId)
  fireEvent.input(elementInput, { target: { value } })
}

export const testElementExists = (sut: RenderResult, testId: string): void => {
  const element = sut.getByTestId(testId)
  expect(element).toBeTruthy()
}

export const testElementText = (sut: RenderResult, testId: string, text: string): void => {
  const element = sut.getByTestId(testId)
  expect(element.textContent).toBe(text)
}

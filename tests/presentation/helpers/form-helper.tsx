import { RenderResult } from '@testing-library/react'

export const testChildCount = (sut: RenderResult, testId: string, count: number): void => {
  const element = sut.getByTestId(testId)
  expect(element.childElementCount).toBe(count)
}

export const testButtonIsDisabled = (sut: RenderResult, testId: string, isDisabled: boolean): void => {
  const element = sut.getByTestId(testId) as HTMLButtonElement
  expect(element.disabled).toBe(isDisabled)
}

export const testStatusForField = (sut: RenderResult, fieldName: string, validationError?: string): void => {
  const elementStatus = sut.getByTestId(`${fieldName}-status`)
  expect(elementStatus.title).toBe(validationError || 'Tudo certo!')
  expect(elementStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

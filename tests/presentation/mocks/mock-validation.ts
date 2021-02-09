import { Validation } from '@/presentation/protocols'

export class ValidationStub implements Validation {
  result: Validation.Result

  validate (params: Validation.Params): Validation.Result {
    return this.result
  }
}

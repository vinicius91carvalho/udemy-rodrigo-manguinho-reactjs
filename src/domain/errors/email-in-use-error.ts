export class EmailInUseError extends Error {
  constructor () {
    super('Eesse e-mail já está em uso')
    this.name = 'EmailInUseError'
  }
}

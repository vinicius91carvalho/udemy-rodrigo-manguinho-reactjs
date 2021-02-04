export enum HttpStatusCode {
  OK = 200,
  NO_CONTENT = 204,
  UNAUTHORIZED = 401
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}

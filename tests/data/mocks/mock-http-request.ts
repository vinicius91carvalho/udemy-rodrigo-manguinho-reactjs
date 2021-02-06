import { HttpPostClient } from '@/data/protocols/http'
import faker from 'faker'

export const mockPostRequest = (): HttpPostClient.Params<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

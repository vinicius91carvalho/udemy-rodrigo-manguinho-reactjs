import axios from 'axios'
import faker from 'faker'

type AxiosResult = {
  data: any
  status: number
}

export const mockedAxiosResult: AxiosResult = ({
  data: faker.random.objectElement(),
  status: faker.random.number()
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue(mockedAxiosResult)
  return mockedAxios
}

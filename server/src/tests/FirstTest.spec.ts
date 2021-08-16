import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'teste'

  expect(user.name).toEqual('teste')
})

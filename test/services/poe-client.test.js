import Client from '../../src/services/poe-client.js'

test('poe post query should return result', async () => {
  const data = await Client.getItem()

  expect(data).not.toBeNull()
  expect(data.id).not.toBeNull()
  expect(data.total).not.toBeNull()
  expect(data.result).not.toBeNull()
})

test('can get poe webpage', async () => {
  const data = await Client.getPoeWebpage()
  
  expect(data).not.toBeNull()
})

test('can get script string from webpage', async () => {
  const data = await Client.getQueryFromPoeTrade('zJRO6DgI4');

  expect(data).not.toBeNull()
  expect(data.name).toBe('Nebulis')
  expect(data.type).toBe('Void Sceptre')
  expect(data.stats).not.toBeNull()
  expect(data.status).toBe('any')
})
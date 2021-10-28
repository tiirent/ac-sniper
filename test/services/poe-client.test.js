import Client from '../../src/services/poe-client.js'

const query = {
  status: {
    option: "online",
  },
  name: "The Pariah",
  type: "Unset Ring",
  stats: [
    {
      type: "and",
      filters: [],
    },
  ],
}

const resultList = [
  "cb67a3671db9ec62c378bfc82fea77294537e9dcc98f4cf20c5b49796443468c",
  "ee9ef21f7f5c687c1459ca6872890ea53ac51e2adeb925bb0369d1d645997c53",
  "6c6f882f2f9f401aa3e242b2a29996ab66532f0f3adfa5d0d07c71dc8f3da3f6",
]

test('poe post query should return result', async () => {
  const resultList = await Client.getItemResultList(query)

  expect(resultList).not.toBeNull()
  expect(resultList).toBeInstanceOf(Array)
})

test('can get poe webpage', async () => {
  const page = await Client.getPoeWebpage('zJRO6DgI4')

  expect(page).not.toBeNull()
})

test('can get query from script string from webpage', async () => {
  const query = await Client.getQueryFromPoePage('zJRO6DgI4')

  expect(query).not.toBeNull()
  expect(query.name).toBe('Nebulis')
  expect(query.type).toBe('Void Sceptre')
  expect(query.stats).not.toBeNull()
  expect(query.status).toBe('any')
})

test('can get item listings from results', async () => {
  const item = await Client.getItemResult(resultList)

  expect(item).not.toBeNull()
  expect(item.result).not.toBeNull()
})
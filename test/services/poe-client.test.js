import Client from '../../src/services/poe-client.js'

test('test poe response', () => {
  return Client.getItem().then(data => {
    expect(data).not.toBeNull();
    expect(data.id).not.toBeNull();
    expect(data.total).not.toBeNull();
    expect(data.result).not.toBeNull();
  });
})
import Backend from '../../src/services/backend.js'

test('test poe response', () => {
    return Backend.getItem().then(data => {
        expect(data).not.toBeNull();
      });
})
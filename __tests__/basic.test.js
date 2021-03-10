const fn = require('../dist').default;

describe('Basic test', () => {
  test('api get should get profile info', (done) => {
    const apis = fn({
      host: 'https://api.github.com',
      request: ['', 'json'],
      items: [
        {
          items: {
            profile: ['get', '/users/afeiship']
          }
        }
      ]
    });

    apis.profile().then((res) => {
      expect(res.login).toBe('afeiship');
      done();
    });
  });
});

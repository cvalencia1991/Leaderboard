// Jest mock for getid module
const testResponseData = {
  test: 'test',
};

const getid = jest.fn((url, options) => {
  if (typeof options.body !== 'string') {
    return Promise.reject(new Error('body should be a string'));
  }
  const testResponse = {
    ok: true,
    json() {
      return Promise.resolve(testResponseData);
    },
  };
  return Promise.resolve(testResponse);
});

export default getid;
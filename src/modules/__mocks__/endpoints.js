const refreshPage = jest.fn(() => Promise.resolve({
  status: 200,
  result: [
    {
      user: 'John',
      score: 42,
    },
    {
      user: 'Jane',
      score: 35,
    },
  ],
}));

export default refreshPage;
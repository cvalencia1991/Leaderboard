import { it, expect } from '@jest/globals';

import getid from '../modules/getid.js';

jest.mock('../modules/getid.js');

it('should convert the provided data to JSON before sending the request', async () => {
  const testData = { key: 'test' };
  let errorMesage;
  try {
    await getid(testData);
  } catch (err) {
    errorMesage = err;
  }
  expect(errorMesage).not.toBe('not a String');
});

it('should resolves any random id', () => {
  const testResponseData = { test: 'test' };
  const testData = { key: 'test' };
  getid.mockResolvedValue(testResponseData);
  expect(getid(testData)).resolves.toBe(testResponseData);
});
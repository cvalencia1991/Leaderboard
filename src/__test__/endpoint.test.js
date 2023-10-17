import { describe, it } from '@jest/globals';

import refreshPage from '../modules/endpoints.js';

jest.mock('../modules/endpoints.js');

describe('refreshPage', () => {
  it('should call the info of the funtion refersh page ', () => {
    refreshPage();
    expect(refreshPage).toHaveBeenCalled();
  });
});

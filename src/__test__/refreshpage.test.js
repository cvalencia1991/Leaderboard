import { describe, it } from '@jest/globals';

import refreshPage from '../modules/refreshPage.js';

jest.mock('../modules/refreshPage.js');

describe('refreshPage', () => {
  it('should call the info of the funtion refersh page ', () => {
    refreshPage();
    expect(refreshPage).toHaveBeenCalled();
  });
});

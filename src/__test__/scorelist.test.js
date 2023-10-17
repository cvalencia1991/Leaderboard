import { it } from '@jest/globals';

import Scorelist from '../modules/scorelist.js';

it('should get the score and the name of the leaderboard', () => {
  const user = new Scorelist('John', 42);
  expect(user.name).toBe('John');
  expect(user.score).toBe(42);
});
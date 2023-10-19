/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from '@jest/globals';
import Scorelist from '../modules/scorelist.js';

describe('Scorelist', () => {
  it('should get the score and the name of the leaderboard', () => {
    const user = new Scorelist('John', 42);
    expect(user.name).toBe('John');
    expect(user.score).toBe(42);
  });

  it('should create a score list item', () => {
    const user = new Scorelist('John', 42);
    document.body.innerHTML = '<div><form id="form"></form><ul id="scoreslist"></ul></div>';
    const scorelistitem = user.addscorelist();
    expect(scorelistitem).not.toBeNull();
  });
});
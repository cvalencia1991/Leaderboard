import Scorelist from './scorelist.js';
import getInfo from './getinfo.js';

const createPLayer = (name, scorePlayer) => {
  if (name !== '' || scorePlayer !== '') {
    const scorelistitem = new Scorelist(name, scorePlayer);
    scorelistitem.addscorelist();
    getInfo(name, scorePlayer);
  }
};

export default createPLayer;

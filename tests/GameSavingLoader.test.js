import GameSavingLoader from '../src/js/GameSavingLoader';
import readGameSaving from '../src/js/readGameSaving';

jest.setTimeout(5500);

jest.mock('../src/js/readGameSaving');

describe('TEST: GameSavingLoader', () => {
  test('load data', () => {
    readGameSaving.mockRejectedValue();
    const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';

    GameSavingLoader.load().then((res) => {
      expect(res).toBe(expected);
    });
  });

  test('load error', () => {
    readGameSaving.mockRejectedValue(new TypeError('Error'));

    GameSavingLoader.load().catch((err) => {
      expect(err).toThrow('Error');
    });
  });
});
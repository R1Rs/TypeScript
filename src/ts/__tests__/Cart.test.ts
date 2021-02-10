import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('sum from Cart', () => {
  const cart = new Cart();
  cart.add(new Book(1002, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.sum()).toBe(2900);
});

test('sumWithDicount from Cart', () => {
  const cart = new Cart();
  cart.add(new Book(1002, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.sumWithDiscount(10)).toBe(2610);
});

test('sum from Cart', () => {
  const cart = new Cart();
  cart.add(new Book(1002, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.remove(1002);

  expect(cart.sum()).toBe(900);
});
import Category from '../models/Category';
import Dish from '../models/Dish';

export const CATEGORIES = [
  new Category(1, 'Italian', '#6b83d1'),
  new Category(2, 'Asian', '#b487df'),
  new Category(3, 'French', '#f5a442'),
  new Category(4, 'Polish', '#f5d142'),
  new Category(5, 'Deserts', '#e8d7bb'),
];

export const DISHES = [
  new Dish(1, 'Pizza Napoletana', 1, require('../assets/pizza-napoletana.png')),
  new Dish(2, 'Polenta', 1, require('../assets/polenta.png')),
  new Dish(3, 'Cotoletta alla Milanese', 1, require('../assets/cotoletta-alla-milanese.png')),
  new Dish(4, 'Osso Buco alla Milanese', 1, require('../assets/osso-buco-alla-milanese.png')),
  new Dish(5, 'Peking Duck', 2, require('../assets/peking-duck.png')),
  new Dish(6, 'Sushi', 2, require('../assets/sushi.png')),
  new Dish(7, 'Kimchi', 2, require('../assets/kimchi.png')),
];

import {Cards} from './components/cards/cards';
import {Filter} from './components/filter/filter';

import {filterCards} from './store/reducers';
import { createStore } from './store/store';

const initialState = { showForSale: true, showSold: true };
const type = {
  'forSale': 'FOR_SALE',
  'sold': 'SOLD',
};

const logger = (action, state) => console.log(action, state);

const rerender = (action, state) => {
  const {showForSale, showSold} = state;
  logger(action, state);

  const section = document.querySelector('section');
  if (section) section.remove();

  app.append(Cards(showSold, showForSale));
};

const { subscribe, dispatch } = createStore(filterCards, initialState);
subscribe(rerender);

const onChange = ({target}) => {
  const action = { type: type[target.name], payload: target.checked };
  dispatch(action)
};

const app = document.createElement('div');
app.append(Filter(onChange));
app.append(Cards());
document.body.append(app);
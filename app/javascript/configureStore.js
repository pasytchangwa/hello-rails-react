import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './redux/greetings';

export default function configureStore() {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
      thunk,
    )),
  );
  return store;
}

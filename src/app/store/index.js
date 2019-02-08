import thunk from 'redux-thunk';

import reducer from './reducers';
import cardsMiddleware from './middlewares/cards';

export default $ngReduxProvider => {
    $ngReduxProvider.createStoreWith(
        reducer,
        [thunk],

        // TODO: error in test when included
        // [window.__REDUX_DEVTOOLS_EXTENSION__()]
    );
};

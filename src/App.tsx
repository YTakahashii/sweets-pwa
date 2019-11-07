import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { AppRouter } from './AppRouter';
import { GlobalStyle } from './styles/GlobalStyle';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './themes/variables.css';
import './themes/theme.css';

const composeEnhancers = composeWithDevTools({});
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['entities', 'sweets', 'shop', 'largeCategory', 'smallCategory'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <AppRouter />
      </PersistGate>
    </Provider>
  );
};

export default App;

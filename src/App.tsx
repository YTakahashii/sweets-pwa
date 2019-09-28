import React from 'react';
import { theme } from './utils/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { TopBar } from './components/TopBar/TopBar';
import { Pages } from './pages';
import { BottomNavigationBar } from './components/BottomNavigationBar/BottomNavigationBar';
import { BrowserRouter } from 'react-router-dom';
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
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const composeEnhancers = composeWithDevTools({});
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['sweets', 'shop', 'largeCategory', 'smallCategory'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StylesProvider injectFirst>
          <MaterialThemeProvider theme={theme}>
            <StyledThemeProvider theme={theme}>
              <>
                <CssBaseline />
                <BrowserRouter>
                  <TopBar />
                  <Pages />
                  <BottomNavigationBar />
                </BrowserRouter>
              </>
            </StyledThemeProvider>
          </MaterialThemeProvider>
        </StylesProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

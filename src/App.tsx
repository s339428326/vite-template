import { HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

import { Home, NotFound } from './pages/index';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );
}

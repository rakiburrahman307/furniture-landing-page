import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Loading from './components/utils/Loading.jsx';

// eslint-disable-next-line react-refresh/only-export-components
const App = lazy(() => import('./App.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loading/>}>
      <App />
    </Suspense>
  </StrictMode>
);

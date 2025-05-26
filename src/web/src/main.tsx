
import { createRoot } from 'react-dom/client';
import './index.css';
import RouterProvider from './routes/index.tsx';

createRoot(document.getElementById('root')!).render(
  <RouterProvider />
);

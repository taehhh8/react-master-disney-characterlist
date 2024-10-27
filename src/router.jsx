import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import CharacterListPage from './pages/CharacterListPage';
import CharacterDetailPage from './components/CharacterDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <CharacterListPage />,
      },
      {
        path: 'detail/:id',
        element: <CharacterDetailPage />,
      },
    ],
  },
]);

export default router;

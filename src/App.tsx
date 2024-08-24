import { BrowserRouter } from 'react-router-dom';
import AppRouter from './core/Router';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

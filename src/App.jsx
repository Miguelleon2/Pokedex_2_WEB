import { AppRouter } from './AppRouter';
import { PokemonProvider } from './context/PokemonProvider';

function App() {
  return (
    <PokemonProvider>
      <AppRouter>
        
      </AppRouter>
    </PokemonProvider>
  )
}

export default App;

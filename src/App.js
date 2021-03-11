import Jackets from './Jackets';
import Shoes from './Shoes';
import Hats from './Hats';

function App() {
  return (
    <div>
      <Jackets startingCount={2} />
      <Shoes startingCount={4} />
      <Hats startingCount={6} />
    </div>
  );
}

export default App;

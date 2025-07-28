import InfoModal from './components/InfoModal';
import PlayerModal from './components/PlayerModal';
import Sidebar from './components/Sidebar'
import Home from './pages/Home';

function App() {
  return (
    <div className="relative">
      <Sidebar />
      <Home />
      <PlayerModal />
      <InfoModal />
    </div>
  )
}

export default App;

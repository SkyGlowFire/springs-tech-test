import AddGameForm from './components/AddGameForm';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column" style={{ position: 'relative' }}>
      <Alert />
      <Navbar />
      <div className="container my-4">
        <AddGameForm />
        <hr />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;

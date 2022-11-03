import './App.css';
import AuthProvider from './context/AuthProvider';
import Public from './Routes/Public';

function App() {
  return (
    <AuthProvider className="App">
      <Public/>
    </AuthProvider>
  );
}

export default App;

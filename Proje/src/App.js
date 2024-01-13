import Navbar from './Navbar';
import Anasayfa from './Anasayfa';

function App() {

  return (
    <div className="App">
      <Navbar />      
      <div className='icerik'>
        <Anasayfa />
      </div>    
    </div>
  );
}

export default App;

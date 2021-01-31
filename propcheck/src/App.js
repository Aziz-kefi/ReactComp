import './App.css';
import { Profil } from './profil/Profil';
import picture from './PDP.jpg';
import picdefault from './PDP.jpg'

function App() {
  function handleName(on){
    alert(`your name is ${on}` )
  }

  return (
    <div className="App">
        <div className="container" style={{backgroundColor:"darkolivegreen"}}>
        <h2>Use of props with parametrs</h2>
          <Profil FullName='Aziz Kéfi' Bio='Just a random person' Profession='Student in GO MY CODE' handleName={handleName}>
              <img src={picture} alt='profil pic' width="250px"/>  
          </Profil>
          
        </div>
          
          <hr/>
          <div className="container" style={{backgroundColor:"grey"}}>
            <h2>Use of props with default parametrs</h2>
          <Profil handleName={handleName}>
          <img src={picdefault} alt='profil pic' width="250px"/>
          </Profil>
          </div>      
    </div>
  );
}

export default App;

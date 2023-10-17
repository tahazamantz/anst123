import logo from './logo.svg';
import './App.css';
import Navbar from "./assests/Navbar";
import Carousel from './assests/Carousel'
import Chat from './assests/Chat'
function App() {
  return (
    <>
    <div className="App">     
      <Navbar/>
      <Carousel/>
      <div className="info">
        <h1>(G)MBHS</h1>
        <p>lorem10

src\assests\Navbar.jsx
  Line 5:8:  'NavDropdown' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

WARNING in [eslint]
src\App.js
  Line 1:8:  'logo' is defined but never used  no-unused-vars

src\assests\Navbar.jsx
  Line 5:8:  'NavDropdown' is defined but never used  no-unused-vars

webpack compiled with 1 warning
   </p>
      </div>
      <Chat/>
    </div>
  
    </>
  );
}

export default App;

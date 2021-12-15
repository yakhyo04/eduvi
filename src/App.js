import './App.css';
import Box from './Components/Box/Box';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Eduvishop from './Components/Pages/EduviShop';
import Wrapper from './Components/Wrapper/Wrapper';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Header/>
        <Routes>
          <Route path="/home" element={<Header/>} />
          <Route path="/eduvi-shop" element={<Eduvishop/>} />
        </Routes>
      <Main/>
      <Wrapper/>
      <Box/>
      <Footer/>
    </div>
  );
}

export default App;

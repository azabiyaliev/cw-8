import NavBar from './components/NavBar/NavBar.tsx';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home.tsx';
import AddQuote from './containers/AddQuote/AddQuote.tsx';

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-quote" element={<AddQuote/>}/>
        </Routes>
      </Container>
    </>
  );
};

export default App;

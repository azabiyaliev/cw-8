import NavBar from './components/NavBar/NavBar.tsx';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home.tsx';
import NewQuote from './containers/NewQuote/NewQuote.tsx';
import EditQuote from './containers/EditQuote/EditQuote.tsx';
import Typography from '@mui/material/Typography';

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-quote" element={<NewQuote/>}/>
          <Route path="/quotes/:idQuote/edit" element={<EditQuote/>}/>
          <Route path="/quotes" element={<Home/>}/>
          <Route
            path="*"
            element={<Typography variant="h3">Not found</Typography>}
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;

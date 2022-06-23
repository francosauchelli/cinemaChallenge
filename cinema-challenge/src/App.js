// routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// styles
import './App.css';
// local files - components
import NavBar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
// local files - pages
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
// local files - context
import { SearcherProvider } from './context/SearcherContext';



function App() {
  return (
    <div className="main-container">
      <SearcherProvider >
        <BrowserRouter >
          <NavBar />
            <Routes >  
              <Route path='/' element={ <Home /> } />
              <Route path='/:id' element={ <DetailPage /> } />
            </Routes>
          <Footer />
        </BrowserRouter>
      </SearcherProvider>
    </div>
  );
}

export default App;

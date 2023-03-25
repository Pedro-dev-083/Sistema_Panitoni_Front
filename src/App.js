import React from 'react';
import Routes from './routes';
import { RouterProvider } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (  
    <div>    
      <Header/>
      <main>
        <RouterProvider router={Routes} />
      </main>              
      <Footer/>
    </div>  
  );
}

export default App;

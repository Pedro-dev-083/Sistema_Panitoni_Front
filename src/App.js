import React, { useState } from 'react';
import Routes from './routes';
import { RouterProvider } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Modals from './components/modals/modals';


function App() {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (  
    <div>    
      <Header openModal={openModal}/>
      <Modals modalType={modalType} closeModal={closeModal} />      
      <main>
        <RouterProvider router={Routes} />
      </main>        
      <Footer/>
    </div>  
  );
}

export default App;

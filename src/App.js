import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import FAQViews from './views/FAQView';
import Head from "./components/Head";
import MenuModal from "./components/MenuModal";
import { useState } from "react";


function App() {

  let [showMenuModal, setShowMenuModal] =  useState(false);

  const toggleMenuModal = () => {
    setShowMenuModal(!showMenuModal);
  };

  return (
    <Router>
      <div  className="App">
        <Head toggleModal={toggleMenuModal} />

        {/* Show Menu Modal only when var showMenuModal is true */}
        { showMenuModal && <MenuModal toggleModal={toggleMenuModal} /> }
        {/* <MenuModal /> */}

        {/* Content of the page, due to the chosen route */}
        <Routes>
          <Route path='/' element={ <HomeView /> } />
          <Route path="/about" element={ <AboutView /> } />
          <Route path="/contact" element={ <ContactView /> }  />
          <Route path="/faq" element={ <FAQViews /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

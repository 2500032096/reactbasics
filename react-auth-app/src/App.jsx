import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';

import Login from './Login';

function App() {
  
  return (
    <>
      <div className="page">  

    <Header title="Ecommerece Website" name="Bhaskar"/>
    <Sidebar/>
   <MainContent/>
    <Footer/>
   </div>

    </>
  )
}

export default App

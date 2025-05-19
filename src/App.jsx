
import './App.css';
import { Footer, Header } from './components';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div  className='dark:bg-darkbg'>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;

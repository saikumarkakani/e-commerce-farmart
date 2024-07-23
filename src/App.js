
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Headers } from './Components/Headers/header.component';
import { AppRoutes } from './app.routers';
import { Footer } from './Components/Footer/footer.component';
import { TopHeader } from './Components/Headers/Top-Header/topheader.component';

function App() {
  return (
    <div className="body">
   
     <BrowserRouter>
     <TopHeader></TopHeader>
     <Headers></Headers>
     <AppRoutes></AppRoutes>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;

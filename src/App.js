import './App.css';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Principal from './paginas/PaginaPrincipal/Principal';
import Doacao from './paginas/PaginaDoação/Doacao';
import Ongs from './paginas/PaginaOngs/Ongs'
import SobreMim from './paginas/PaginaSobreMim/SobreMim';
import DoacaoSessao1 from './paginas/PaginaDoação/DoacaoSessao1';
import Menu from './menu/Menu';
import PagamentoTela from './pagamento/PagamentoTela';
import OngsDoando from './paginas/PaginaOngs/OngsDoando';

// import "./../node_modules/boostrap/dist/css/boostrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      {/* <Route path='/' element={<Menu />}> */}
      <Route index element={<Principal />} />
      <Route path='Doacao' element={<Doacao />}>
        <Route path='DoacaoSessa01' element={<DoacaoSessao1 />}></Route>
      </Route>
      <Route path='Ongs' element={<Ongs />} />
      {/* <Route path='OngsDoando' element={<OngsDoando />} /> */}
      <Route path='OngsDoando/:infoId' element={<OngsDoando />} />
      <Route path='SobreMim' element={<SobreMim />} />
      <Route path='PagamentoTela' element={<PagamentoTela />} />

      {/* </Route> */}
    </Routes>
  );
}

function App() {

  return (

    <div className='App'>
      <BrowserRouter>
        <header />
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </BrowserRouter>
    </div>
    // <AnimatePresence mode="wait">
    //   <Routes key={location.pathname} location={location}>
    //     <Route path='/' element={<Menu />}>
    //       <Route index element={<Principal />} />
    //       <Route path='Doacao' element={<Doacao />} />
    //       <Route path='Ongs' element={<Ongs />} />
    //       <Route path='SobreMim' element={<SobreMim />} />

    //     </Route>
    //   </Routes>
    //   <div className="App">
    //     {/* <RouterProvider router={router} /> */}
    //   </div>
    // </AnimatePresence>
  );
}

export default App;

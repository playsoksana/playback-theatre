
import { Route, Routes} from "react-router-dom";


import Footer from "./Footer";
import Gallery from "../views/Gallery/Gallery";
import EnterView from "../views/Enter/EnterView";
import Header from "./Header";
import Home from "../views/Home/HomeView";


import '../styles/base.scss';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/gallery" exact element={<Gallery/>} />
        <Route path="/enter/login" exact element={<EnterView/>} />
        <Route path="/enter/registration" exact element={<EnterView/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

import Header from "./Components/Header/Header";
import { GlobalStyle } from "./Global";
import { Router } from "./Routes/Router";
import Pagination from "./Components/Pagination";

function App() {
  return (
    <div>
      <Header/>
      <GlobalStyle/>
      <Pagination/>
      <Router/>
    </div>
  );
}

export default App;

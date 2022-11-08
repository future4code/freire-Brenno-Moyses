import Header from "./Components/Header/Header";
import { GlobalStyle } from "./Global";
import { Router } from "./Routes/Router";

function App() {
  return (
    <div>
      <Header/>
      <GlobalStyle/>
      <Router/>
    </div>
  );
}

export default App;

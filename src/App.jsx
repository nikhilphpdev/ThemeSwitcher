import {Home} from "./components/Home";
import  ThemeSwitcher  from "./components/ThemeSwitcher";

function App() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Home />
        <ThemeSwitcher />
      </div>
    </>
  );
}

export default App;

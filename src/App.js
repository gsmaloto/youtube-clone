import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Videos from "./components/Videos";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <div className="container">
        <div className="sidebar">
          <div className="sidebar__inner">
          <SideNav />
          </div>
            
        </div> 
      <div className="videos">
        <Videos />
      </div>
      
      </div> */}

      <div className="mainContainer">
        <div className="sidebar">
          <SideNav />
        </div>
        <div className="videos">
          <Videos />
        </div>
      </div>
    </div>
  );
}

export default App;

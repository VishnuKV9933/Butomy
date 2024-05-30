import "./App.css";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Help from "./Components/Help/Help";
import Notified from "./Components/Notified/Notified";
import OneApp from "./Components/OneApp/OneApp";
import OneBanking from "./Components/OneBanking/OneBanking";
import Organize from "./Components/Organize/Organize";
import Send from "./Components/Send";
import PerfectCard from "./Components/TestComponent /PerfectCard";
import Top from "./Components/Top/Top";

function App() {
  return (
    <>
      <Header />
      <Top />
      <OneBanking />
      <Send />
      <Organize />

      <Notified/>
      <PerfectCard/>
      <OneApp />
      <Help />
      <Blog />
      <Footer />
    </>
  );
}

export default App;

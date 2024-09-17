import logo from "../assets/mic-drop.png";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="./mysongs">
          <img src={logo} className="w-6 h-4" alt="logo" />
        </a>
        <h2>Practice and enjoy your favorite songs here!</h2>
      </header>
    </div>
  );
}

export default Home;

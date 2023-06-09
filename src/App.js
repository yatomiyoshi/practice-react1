import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Learn SPA</p>
        <div>
          <h1>Welcom to my app</h1>
          <MyButton />
        </div>
        <div>
          <h2>Welcome to my app button2</h2>
          <MyButton2 />
        </div>
        <div>
          <AboutPage />
          <Profile />
        </div>
      </header>
    </div>
  );
}

function MyButton() {
  return <button>I'm a button</button>;
}

function MyButton2() {
  return <button color="blue">button2</button>;
}

function AboutPage() {
  return (
    <>
      <h3>About</h3>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
export default App;

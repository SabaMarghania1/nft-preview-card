import "./App.css";
const clockImg = `${process.env.PUBLIC_URL}/images/icon-clock.svg`;
const etheriumImg = `${process.env.PUBLIC_URL}/images/icon-ethereum.svg`;
const containerImg = `${process.env.PUBLIC_URL}/images/image-equilibrium.jpg`;
const avatar = `${process.env.PUBLIC_URL}/images/image-avatar.png`;

function App() {
  return (
    <div className="container">
      <Img />
      <Text />
      <Value />
      <Author />
    </div>
  );
}

function Img() {
  return (
    <div className="img-container">
      <img src={containerImg} className="main-img" alt="icon" />
      <div className="hoverMe"></div>
    </div>
  );
}

function Text() {
  return (
    <>
      <h3 className="title">Equilibrium #3429</h3>
      <p className="paragraph">Our Equilibrium collection promotes balance and calm.</p>
    </>
  );
}

function Value() {
  return (
    <div className="price">
      <span className="eth">
        <img src={etheriumImg} className="ethimg" alt="etherium" />
        0.041ETH
      </span>
      <span className="time">
        <img src={clockImg} alt="" />3 days left
      </span>
    </div>
  );
}

function Author() {
  return (
    <div className="author-container">
      <img src={avatar} alt="author" className="author-img" />
      <p className="author">
        Creation of <span className="name">Jules Wyvern</span>
      </p>
    </div>
  );
}

export default App;

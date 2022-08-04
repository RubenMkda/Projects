const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
/*Ejemplos*/

/*Practica actual*/
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Ruben",
  lastName: "Moncada",
  avatarUrl: "Imag/Beatrice1.png",
};
// const element = <h1>Hello, {formatName(user)}</h1>;

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

root.render(getGreeting());

/*Div 2*/
let URL = "Imag/Beatrice1.png";

// const element = <a href="https://www.reactjs.org"> link </a>;
// const element = <img src={user.avatarUrl}></img>;
// const element = <h2 className="greeting">Hello, world!</h2>;
// const element = React.createElement(
//   "h2",
//   { className: "greeting" },
//   "Hello, world!"
// );
// const element = {
//   type: "h1",
//   props: {
//     className: "greeting",
//     children: "Hello, world!",
//   },
// };

// root2.render(element);

/*Ejemplo 3*/
const root3 = ReactDOM.createRoot(document.getElementById("root3"));

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>it is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root3.render(element);
// }

// setInterval(tick, 1000);

/*Ejemplo 4*/

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

function formatDate(date) {
  return date.toLocaleTimeString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const Beatrice = {
  date: new Date(),
  text: "Baka",
  author: {
    name: "Beatrice",
    avatarUrl: "Imag/Beatrice1.png",
  },
};

const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(
  <Comment date={Beatrice.date} text={Beatrice.text} author={Beatrice.author} />
);

const root5 = ReactDOM.createRoot(document.getElementById("root5"));

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root5.render(element);
// }

// setInterval(tick, 1000);

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  ComponentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Tu clickeaste el submit");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This link is necesary for do that "this" work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

// class LogginButton extends React.Component {
//   handleClick = () => {
//     console.log("this is:", this);
//   };

//   render() {
//     return <button onClick={this.handleClick}>Click me</button>;
//   }
// }

root5.render(<Clock />);

const root6 = ReactDOM.createRoot(document.getElementById("root6"));

root6.render(<Clock />);

const root7 = ReactDOM.createRoot(document.getElementById("root7"));
root7.render(<LogginButton />);

const root8 = document.getElementById("root8");

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
ReactDOM.render(<Greeting isLoggedIn={false} />, root8);

function LogginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LogginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
ReactDOM.render(<LoginControl />, document.getElementById("root9"));

const root10 = document.getElementById("root10");

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {/*Este funciona con las condicionalis, es como un if de una sola linea, me gusta el uso de esto, se calcula el total de mensajes que tiene el usario y si ve que tiene más de 0 elemntos en la array (osea que se cumple la condicion de "unreadMessages.length > 0") este renderiza la etiqueta h2 con su respectivo mensaje*/}
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

const messages = [];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById("root10")
);

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return <div className="warning">Warning!</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById("root11"));

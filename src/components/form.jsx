import "./Form3.css";
import { useState } from "react";
//This line is like saying, "I have a special tool called 'useState' that I want to use. It helps me remember things in my magic notebook." It's like having a special pencil to write with.
import logo from "../images/logo22.png.png";
import image from "../images/yarn-2795588_1920.png";
import userIcon from "../icons/user.png";
import emailIcon from "../icons/email.png";
import passwordIcon from "../icons/padlock.png";

export function Form({ setUser }) {
  //This part is like saying, "I'm going to create a special form where I can write down some information. I'll call it 'Form'. And I might need to use a tool called 'setUser' later." It's like telling your magic notebook to get ready for writing.

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  //Here, you're creating a space in your magic notebook to write down your name. The useState("") part is like saying, "Start with an empty space for my name."
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  //Lastly, you have a special space called 'error' to write down if something goes wrong. Right now, it's empty (set to 'false') because nothing has gone wrong yet.

  const handleSubmit = (e) => {
    //You're saying, "When I press the magical button, this is what we're going to do." You're giving the computer a set of instructions.
    e.preventDefault();
    //This line is like saying, "Hey, computer, don't do the normal thing you usually do when a button is pressed. I want to do something special first." It's like telling the computer to pause and wait for your instructions.

    //Next, you're checking if your magic notebook has all the important information filled in: name, password, repeated password, and email. If any of these are empty, it means you forgot to write something down, and you want to show an error.

    if (
      name === "" ||
      password === "" ||
      repeatPassword === "" ||
      email === ""
    ) {
      setError(true);
      return;
    }

    // Check if the repeated password is not the same as the original password
    if (password !== repeatPassword) {
      setError1(true);
      //setErrorText("Your passwords need to be the same."); // Set a custom error message
      return;
    }

    setError(false);

    setUser([name]);
  };

  return (
    <section className="container">
      <div className="header">
        <div className="text">Sign up</div>
        <div className="underline"></div>
      </div>

      <img className="yarn" src={image} alt="yarn" />
      <img className="logo" src={logo} alt="Logo"></img>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <img
            className="icon"
            src={userIcon}
            alt="user Icon"
            style={{
              filter:
                "invert(50%) sepia(0%) saturate(1688%) hue-rotate(213deg) brightness(93%) contrast(78%)",
            }}
          />
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input">
          <img
            className="icon"
            src={emailIcon}
            alt="email Icon"
            style={{
              filter:
                "invert(50%) sepia(0%) saturate(1688%) hue-rotate(213deg) brightness(93%) contrast(78%)",
            }}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <img
            className="icon"
            src={passwordIcon}
            alt="password Icon"
            style={{
              filter:
                "invert(50%) sepia(0%) saturate(1688%) hue-rotate(213deg) brightness(93%) contrast(78%)",
            }}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input">
          <img
            className="icon"
            src={passwordIcon}
            alt="password Icon"
            style={{
              filter:
                "invert(50%) sepia(0%) saturate(1688%) hue-rotate(213deg) brightness(93%) contrast(78%)",
            }}
          />
          <input
            placeholder="Repeat password"
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>

        <div className="forgot-password">
          <p>
            Lost Password? <span>Click Here!</span>
          </p>
        </div>

        <div className="error">
          {error && <p style={{ color: "red" }}>Please fill in all fields</p>}
          {error1 && (
            <p style={{ color: "red" }}>
              Please make sure your password are the same
            </p>
          )}
        </div>

        <div className="form-button-container">
          <button className="button">Sign up</button>
          <button className="button" id="login">
            Login
          </button>
        </div>
      </form>
    </section>
  );
}

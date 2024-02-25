import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function changeName(event) {
    setName(event.target.value);
  }
  function changeLastName(event) {
    setLastName(event.target.value);
  }
  function changeEmail(event) {
    setEmail(event.target.value);
  }
  function changePassword(event) {
    setPassword(event.target.value);
  }
  function changePasswordAgain(event) {
    setPasswordAgain(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="First name" />
        <input type="search" onChange={changeName} />
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Last name" />
        <input type="search" onChange={changeLastName} />
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="E-mail" />
        <input type="search" onChange={changeEmail} />
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Password" />
        <input type="search" onChange={changePassword} />
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Confirm password" />
        <input type="search" onChange={changePasswordAgain} />
      </form>
      <p>First-name: {name}</p>
      <p>Last-name: {lastName}</p>
      <p>E-mail: {email} </p>
      <p>Password: {password}</p>
      <p>Confirm Password: {passwordAgain}</p>
    </>
  );
}

export default App;

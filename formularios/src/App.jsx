import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [five, setFive] = useState("");
  const [noMatch, setNoMatch] = useState("");
  const [eight, setEight] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (name.length < 3) {
      setMessage("Debe tener al menos dos caracteres");
    } else {
      setMessage("");
    }
    if (lastName.length < 3) {
      setError("Debe tener al menos dos caracteres");
    } else {
      setError("");
    }
    if (email.length < 5) {
      setFive("Debe tener al menos cinco caracteres");
    } else {
      setFive("");
    }
    if (password.length < 8) {
      setEight("Debe tener al menos ocho caracteres");
    } else {
      setEight("");
    }
    if (password === passwordAgain) {
      setNoMatch("");
    } else setNoMatch("Las contraseñas no coinciden");
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
        <input type="search" onChange={changeName} value={name} />
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Last name" />
        <input type="search" onChange={changeLastName} value={lastName} />
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="E-mail" />
        <input type="search" onChange={changeEmail} value={email} />
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Password" />
        <input type="search" onChange={changePassword} value={password} />
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Confirm password" />
        <input
          type="search"
          onChange={changePasswordAgain}
          value={passwordAgain}
        />
      </form>
      <p>First-name:{name}</p>
      {message && <p>{message}</p>}
      <p>Last-name: {lastName}</p>
      {error && <p>{error}</p>}
      <p>E-mail: {email} </p>
      {five && <p>{five}</p>}
      <p>Password: {password}</p>
      {eight && <p>{eight}</p>}
      <p>Confirm Password: {passwordAgain}</p>
      {noMatch && <p>{noMatch}</p>}
    </>
  );
}

export default App;

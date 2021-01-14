import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { io } from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:3000');

socket.on('gamestate', (arg: any) => {
  console.log(arg);
});

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  // const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  // useEffect(() => {
  //  const timer = setTimeout(() => setCount(count + 1), 1000);
  //  return () => clearTimeout(timer);
  // }, [count, setCount]);
  // Return the App component.

  const { register, handleSubmit } = useForm();
  function sendPion(data: any) {
    const formulaireUpload = window.fetch('http://localhost:3000/submitPion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    formulaireUpload.then((res) => {
      res.text().then((value) => {
        console.log(value);
      });
    });
  }
  const onSubmit = (data: any) => sendPion(data);

  return (
    <div className="App">
      <div>Salut</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select name="x" id="x" ref={register}>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
          <option value="200">200</option>
          <option value="250">250</option>
          <option value="300">300</option>
          <option value="350">350</option>
        </select>
        <select name="y" id="y" ref={register}>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
          <option value="200">200</option>
          <option value="250">250</option>
          <option value="300">300</option>
          <option value="350">350</option>
        </select>
        <select name="color" id="color" ref={register}>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="yellow">yellow</option>
          <option value="red">red</option>
          <option value="purple">purple</option>
          <option value="orange">orange</option>
          <option value="pink">pink</option>
        </select>

        <input type="submit" id="submit" value="Submit" />
      </form>
      <div id="app"></div>
    </div>
  );
}

export default App;

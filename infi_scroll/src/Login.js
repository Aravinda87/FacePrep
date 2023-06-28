import React from 'react'
import './App.css';
import { useState } from 'react';
import Home from './Home';

function Login() {
  const username = "foo";
  const password = "bar";

  return (
    <div className='login'>
      Username : <input type='text' name='username'   placeholder='username'></input><br/><br/>
      Password : <input type='text' name='password' placeholder='password'></input><br/><br/>
      hint : username = foo , password = bar <br/><br/>
      <input type='button' onClick={""} value={"LOGIN"}></input>
    </div>
  )
}

export default Login
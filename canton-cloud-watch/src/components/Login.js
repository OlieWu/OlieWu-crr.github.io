import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './Login.css';

function Login() {
    const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    const isPccsEmail = email.endsWith('@pccsk12.com');
    if (isPccsEmail) {
        setLoggedIn(true);
    }
    else {
        alert('Invalid username or password - PCCS email required for security');
    }
  }

  function handleSignup(event) {
    alert('Please email routerangers@pccsk12.com for your login info');
  }

  function handleForgotPassword(event) {
    alert('Please email routerangers@pccsk12.com for your lost password, for safety reasons we do not allow users to manually reset their password');
  }

  if (isLoggedIn) {
    //return <Redirect to="/dashboard" />;
    history.push('/dashboard');
  }

  return (
    <div className="login-page">

        <section class="vh-150 gradient-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white">
                <div class="card-body p-5 text-center">

                    <div class="mb-md-5 mt-md-4 pb-5">

                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">Please enter your login and password!</p>

                    <form onSubmit={handleSubmit}>
                        <div class="form-outline form-white mb-4">
                            <input type="email" id="typeEmailX" class="form-control form-control-lg"value={email} onChange={handleEmailChange} />
                            <label class="form-label" for="typeEmailX">Email
                            </label>
                        </div>

                        <div class="form-outline form-white mb-4">
                            <input type="password" id="typePasswordX" class="form-control form-control-lg" value={password} onChange={handlePasswordChange}/>
                            <label class="form-label" for="typePasswordX">Password
                            </label>
                        </div>

                        <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!" onClick={handleForgotPassword}>Forgot password?</a></p>

                        <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSubmit}>Login</button>

                        <div class="form-check mb-0">
                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                            <label class="form-check-label" for="form2Example3">
                                Remember me
                            </label>
                        </div>
                    </form>
                    </div>

                    <div>
                        <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold" onClick={handleSignup}>Sign Up</a>
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  );
}

export default Login;

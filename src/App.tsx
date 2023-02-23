import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { SignupFormPhase1 } from '../src/components/SignupFormPhase1';
import { SignupFormPhase2 } from '../src/components/SignupFormPhase2';
import { SignupFormPhase3 } from '../src/components/SignupFormPhase3';

function App() {
  return (
    <div className="container-md">
       <div className="row justify-content-md-center">
          <SignupFormPhase1 />
          <SignupFormPhase2 />
          <SignupFormPhase3 />
       </div>
    </div>
  );
}
export default App;
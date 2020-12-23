import React from 'react';

import SignIn from '../src/pages/SignIn/index';
//import SignUp from '../src/pages/SignUp/index';
import GlobalStyle from '../src/styles/global';

import ToastContainer from './components/ToastContainer';
import {AuthProvider} from './hooks/AuthContext';

const App: React.FC = ()=>(
  <>
    <AuthProvider>
      <SignIn/>
    </AuthProvider>

    <ToastContainer/>

    <GlobalStyle/>
  </>
);

export default App;

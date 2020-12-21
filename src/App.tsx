import React from 'react';

import SignIn from '../src/pages/SignIn/index';
//import SignUp from '../src/pages/SignUp/index';
import GlobalStyle from '../src/styles/global';

import {AuthProvider} from './hooks/AuthContext';

const App: React.FC = ()=>(
  <>
    <AuthProvider>
      <SignIn/>
    </AuthProvider>
    <GlobalStyle/>
  </>
);

export default App;

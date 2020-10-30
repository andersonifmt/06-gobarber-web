import React from 'react';

import SignIn from '../src/pages/SignIn/index';
//import SignUp from '../src/pages/SignUp/index';
import GlobalStyle from '../src/styles/global';

import AuthContext from './context/AuthContext';

const App: React.FC = ()=>(
  <>
    <AuthContext.Provider value={{name: 'Anderson'}}>
      <SignIn/>
    </AuthContext.Provider>
    <GlobalStyle/>
  </>
);

export default App;

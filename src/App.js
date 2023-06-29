//= Import Router's =//
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Enter from './components/01Enter/Enter';
import Invite from './components/02Invite/Invite'
import Id from './components/03Id/Id'
import Doing from './components/04Doing/Doing'
import Area from './components/05Area/Area'
import Level from './components/06Level/Level'
import Accept from './components/07Accept/Accept'
import Done from './components/08Done/Done'

import './App.css';

const FormTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {

  const [data, setData] = useState(FormTemplate);

  return (

    <Routes>
      <Route path='/' element={<Enter />}></Route>
      <Route path='/Invite' element={<Invite />}></Route>
      <Route path='/Id' element={<Id />}></Route>
      <Route path='Doing' element={<Doing />}></Route>
      <Route path='Area' element={<Area />}></Route>
      <Route path='Level' element={<Level />}></Route>
      <Route path='Accept' element={<Accept />}></Route>
      <Route path='Done' element={<Done />}></Route>
    </Routes>

  );
}

export default App;

//= Import Router's =//
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Enter from './components/Steps/01Enter/Enter';
import Invite from './components/Steps/02Invite/Invite'
import Id from './components/Steps/03Id/Id'
import Doing from './components/Steps/04Doing/Doing'
import Area from './components/Steps/05Area/Area'
import Level from './components/Steps/06Level/Level'
import Accept from './components/Steps/07Accept/Accept'
import Done from './components/Steps/08Done/Done'
//=============
import Servidor from './components/Discord/Servidor/Servidor';
import Msg from './components/Discord/Msg/Msg'
import BatePapo from './components/Discord/Servidor/BatePapo/BatePapo';

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
      {/* Discord */}
      <Route path='Servidor' element={<Servidor />}></Route>
      <Route path='Msg' element={<Msg />}></Route>
      <Route path='BatePapo' element={<BatePapo />}></Route>

    </Routes>

  );
}

export default App;

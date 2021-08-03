import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState} from 'react'
import Company from './components/Company';
import Footer from './components/Footer';
import Headers from './components/Headers';
import Ishlar from './components/Ishlar';
import Ishlar2 from './components/Ishlar2';
import Kurslar from './components/Kurslar';
import Navbars from './components/Navbars';
import Portfolio from './components/Portfolio';
import Register from './components/Register';
import Contact from './components/Contact.js';
import './sass/style.scss';
import {_uz } from "./language/lang";
import Tabrik from './components/Tabrik';

function App(props) {
  const [lang, setLang] = useState(_uz);

  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars navs={lang} funk={setLang} />
        <Switch>
          <Route path='/' exact component={() => <Headers hed={lang} />} />
          <Route path='/company' exact component={() => <Company hed={lang} />} />
          <Route path='/register' exact component={()=><Register hed={lang} />} />
          <Route path='/kurs' exact component={() => <Kurslar hed={lang} />} />
          <Route path='/portfolio' exact component={Portfolio} />
          <Route path='/tabrik' exact component={() => <Tabrik hed={lang}/>} />
          <Route path='/ishlar2' exact component={()=><Ishlar2 hed={lang}/>} />
          <Route path='/ishlar' exact component={()=><Ishlar hed={lang}/>} />
          <Route path='/contact' exact component={()=><Contact hed={lang}/>} />
        </Switch>
        <Footer hed={lang} />
      </BrowserRouter>

    </div>
  );
}

export default App;
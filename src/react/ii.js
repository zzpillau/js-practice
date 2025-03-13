import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';
import ReactDOM from 'react-dom/client';


import Hello from './Hello.jsx';
import Card from './Card.jsx';
import HelloMessage from './HelloMessage.jsx';
import CardDefaultProps from './CardDefaultProps.jsx'
import List from './List.jsx';
import DefinitionsList from './DefinitionsList.jsx';
import Button from './Button.jsx';
import Alert from './Alert.jsx';
import ListGroup from './ListGroup.jsx'
import BtnGroup  from './BtnGroup.jsx';
import Clock from './Clock.jsx';
import Help from './Help.jsx';
import TextInput from './TextInput.jsx';
import Editor from './Editor.jsx';
import FlavorForm from './FlavorForm.jsx';
import MyForm from './MyForm.jsx';
import ItemsDeleter from './ItemsDeleter.jsx';
import {App} from './App.jsx';
import {UserContext} from './App.jsx';
import { CompanyContext } from './CompanyContext.jsx';
import { Company } from './CompanyContext.jsx';
import { CompanyApp } from './context-study.jsx'


import getCard from './getCard.jsx';

const renderCompanySwitcher = () => {
  const root = ReactDOM.createRoot(document.getElementById('context-study'));
  return root.render(<CompanyApp />)
}

renderCompanySwitcher();

const companyAttributes = {
  name: 'Zzcorp',
  address: {
    country: 'Mother Russia',
    city: 'Belayaberezovsk',
    post: '236237',
  }
}

const dom1 = (
  <CompanyContext.Provider value={companyAttributes}>
    <Company />  
  </CompanyContext.Provider>
)


const mountNode20 = document.getElementById('company-context');
const root20 = ReactDOM.createRoot(mountNode20);
root20.render(dom1);

const currentUser = {
  userName: 'Vasya',
  userId: '3',
};

const dom = (
<UserContext.Provider value={currentUser}>
  <App />
</UserContext.Provider>
);

const mountNode19 = document.getElementById('context');
const root19 = ReactDOM.createRoot(mountNode19);
root19.render(dom);

const mountNode18 = document.getElementById('items-deleter');
const root18 = ReactDOM.createRoot(mountNode18);
root18.render(<ItemsDeleter />);

const mountNode17 = document.getElementById('myForm-root');
const root17 = ReactDOM.createRoot(mountNode17);
root17.render(<MyForm />);

const mountNode = document.getElementById('react-root');
const root = ReactDOM.createRoot(mountNode);
root.render(<Hello />);


const mountNode14 = document.getElementById('textinput-root');
const root14 = ReactDOM.createRoot(mountNode14);
root14.render(<TextInput text='initial text' />);

const mountNode15 = document.getElementById('editor-root');
const root15 = ReactDOM.createRoot(mountNode15);
root15.render(<Editor text='wright here' />);

const mountNode16 = document.getElementById('flavorForm-root');
const root16 = ReactDOM.createRoot(mountNode16);
root16.render(<FlavorForm />);

const mountNode1 = document.getElementById('container');
const root1 = ReactDOM.createRoot(mountNode1);

root1.render(<Card />);


const mountNode2 = document.getElementById('container2');
const root2 = ReactDOM.createRoot(mountNode2);

const params = {
  title: 'My Card Title',
  text: 'Oh, the teeeeeext!..'
}

root2.render(getCard(params));

const mountNode3 = document.getElementById('container3');
const root3 = ReactDOM.createRoot(mountNode3);

root3.render(<HelloMessage name="Jane Shepard"/>)

const mountNode4 = document.getElementById('container4');
const root4 = ReactDOM.createRoot(mountNode4);

// root4.render(<CardDefaultProps />)
root4.render(<CardDefaultProps title='New Title' text='new text'/>)

{/* Collections Prop key */}

const mountNode5 = document.getElementById('container5');
const root5 = ReactDOM.createRoot(mountNode5);

const items = [
  {name: 'Garrus', id: 1},
  {name: 'Wrex', id: 2},
  {name: 'Mordin', id: 3},
  {name: 'Jack', id: 4},
  {name: 'Kaiden', id: 5},
  {name: 'Thali', id: 6},
  {name: 'Liara', id: 7},
]

root5.render(<List data={items}/>);

const mountNode6 = document.getElementById('container6');
const root6 = ReactDOM.createRoot(mountNode6);


const definitions = [
  { dt: 'one', dd: 'two', id: 1 },
  { dt: 'another term', dd: 'another description', id: 2 },
];

root6.render(<DefinitionsList data={definitions} />);

const mountNode7 = document.getElementById('button-container');
const root7 = ReactDOM.createRoot(mountNode7);

root7.render(<Button label='Buttony' type='primary'/>)


const mountNode8 = document.getElementById('alert-container');
const root8 = ReactDOM.createRoot(mountNode8);

const vdom = <Alert>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr />
  <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</Alert>;

root8.render(vdom);

const mountNode9 = document.getElementById('listGroup-container');
const root9 = ReactDOM.createRoot(mountNode9);


root9.render(<ListGroup>
  <p>one</p>
  <p>two</p>
</ListGroup>);


const mountNode10 = document.getElementById('ButtonGroup-container');
const root10 = ReactDOM.createRoot(mountNode10);


root10.render(<BtnGroup  />);

const mountNode11 = document.getElementById('clock');
const root11 = ReactDOM.createRoot(mountNode11);

root11.render(<Clock />)



{/*SLIDER*/}

import Carousel from './Carousel.jsx';

const images = ['./images/first.jpg', './images/second.jpg', './images/third.jpg'];

const root12 = ReactDOM.createRoot(document.getElementById('carousel'));
root12.render(<Carousel images={images} />);

const mountNode13 = document.getElementById('help-root');
const root13 = ReactDOM.createRoot(mountNode13);
root13.render(<Help />);
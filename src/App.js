import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

//COMPONENTS
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <MyHeader
                    headText={"App"}
                    leftChild={<MyButton text={'왼쪽 버튼'} onClick={()=>alert("왼쪽 클릭")}/>}
                    rightChild={<MyButton text={'오른쪽 버튼'} onClick={()=>alert("오른쪽 클릭")}/>}
                />
                <h2>App.js</h2>
                <MyButton text={"버튼 "} onClick={()=>alert("버튼 클릭")} type={"positive"}/>
                <MyButton text={"버튼 "} onClick={()=>alert("버튼 클릭")} type={"default"}/>
                <MyButton text={"버튼 "} onClick={()=>alert("버튼 클릭")} type={"negative"}/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/New' element={<New/>}/>
                    <Route path='/Edit' element={<Edit/>}/>
                    <Route path='/Diary/:id' element={<Diary/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;

import React, { Component, useReducer, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

const reducer = (state, action) => {
    let newState = [];
    switch(action.type){
        case 'INIT':{
            return action.data;
        }
        case 'CREATE': {
            newState = [action.data, ...state];
            break;
        }
        case 'REMOVE': {
            newState = state.filter((it) => it.id !== action.targetId);
            break;
        }
        case 'EDIT': {
            newState = state.map((it) => it.id === action.data.id ? {...action.data} : it);
            break;
        }
        default:
            return state;
    }
    return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
    {
        id:1,
        emotion:1,
        content: '오늘의 일기1',
        date: 1666506290509,
    },
    {
        id:2,
        emotion:2,
        content: '오늘의 일기2',
        date: 1666506342831,
    },
    {
        id:3,
        emotion:3,
        content: '오늘의 일기3',
        date: 1666506342837,
    },
    {
        id:4,
        emotion:4,
        content: '오늘의 일기4',
        date: 1666506342857,
    },
    {
        id:5,
        emotion:5,
        content: '오늘의 일기5',
        date: 1666506345837,
    }
]

function App() {
    const [data, dispatch] = useReducer(reducer, dummyData);
    
    const dataId = useRef(0);
    //CREATE
    const onCreate = (date,content, emotion) => {
        dispatch({type: 'CREATE', data: {
            id: dataId.current,
            date: new Date(date).getTime(),
            content,
            emotion,
        }})
        dataId.current += 1;
    }
    //REMOVE
    const onRemove = (targetId) => {
        dispatch({type: 'REMOVE', targetId});
    }
    //EDIT
    const onEdit = (targetId, date, content, emtion) => {
        dispatch({
            type: "EDIT",
            data: {
                id: targetId,
                date: new Date(date).getTime(),
                content,
                emtion,
            }
        })
    }
    
    
    return (
        <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext.Provider value={{
                    onCreate, onEdit, onRemove,
                }}>
                <BrowserRouter>
                    <div className="App">
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/New' element={<New/>}/>
                            <Route path='/Edit' element={<Edit/>}/>
                            <Route path='/Diary/:id' element={<Diary/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
    );
}

export default App;

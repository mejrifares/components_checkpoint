import React from 'react'
import './App.css';
import ProfilPhoto from './components/profile/ProfilPhoto'
import FullName from './components/profile/FullName'
import Address from './components/profile/Address'
import './object.css'

function App2() {
    return (
        <div className="App2">
            <h1>Hello from app2</h1>
            <ProfilPhoto />
            <FullName />
            <Address />
        </div>
    )
}

export default App2

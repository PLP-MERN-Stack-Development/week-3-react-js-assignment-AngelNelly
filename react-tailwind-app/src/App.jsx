import { useState } from 'react'
import Header from './components/header';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
      </main>
    </div>
  );
}

export default App;
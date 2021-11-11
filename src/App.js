import React from 'react';
import './App.css';
import Home from './components/Main/Home';
import About from './components/Main/About';
import Projects from './components/Main/Projects';
import Resume from './components/Main/Resume';


function App() {
	return (
		<div className='App'>
      <header>
			<p>Hello world!</p>
      </header>
					<Home/>
					<About/>
					<Projects/>
					<Resume />
		</div>
	);
}

export default App;

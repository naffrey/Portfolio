import React from 'react';
import './App.css';
import Home from './components/main/home';
import About from './components/main/about';
import Projects from './components/main/projects';
import Resume from './components/main/resume';


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

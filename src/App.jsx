import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Services from './components/Services'
import CustomButton from './components/CustomButton'
import Team from './components/Team'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Banner from './components/Banner'
import Counter from './components/Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
		<div className='body'>
      <Header/>
			<main>
        <Banner/>
        <About/>
        <Counter/>
        <Team/>
        <Portfolio/>
        <Services/>
        <CustomButton/>
      </main>
    </div>

			
  )
}

export default App

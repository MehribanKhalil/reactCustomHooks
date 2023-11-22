import './App.css'
import Counter from './components/Counter'
import Footer from './components/Footer'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Todo from './components/Todo'

function App() {
 

  return (
    <>
     <Navbar/>
     <Form/>
     <Footer/>
     {/* <Counter/> */}
     <Todo/>
    </>
  )
}

export default App

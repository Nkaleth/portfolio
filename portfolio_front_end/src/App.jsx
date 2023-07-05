import './App.css'
import { About, Footer, Header, Skills, Testimonial, Work  } from './container';

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}


export default App

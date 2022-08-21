
import './App.css';
import Contact from './components/Contact/Contact';
import MainBody from './components/MainBody/MainBody';
import Projects from './components/Projects/Projects';
import TopHeader from './components/TopHeader/TopHeader';

function App() {
  return (
    <div className="App">
      <TopHeader/>
      <MainBody/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

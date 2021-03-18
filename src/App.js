import Intro from './component/Intro';
import SideMenu from './component/SideMenu';
import './App.css';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import JavaScript from './component/JavaScript';
import Write from './component/Write';
import AddBtn from './component/AddBtn';

function App() {
  const [data, handleData] = useState([{id: 1, type: "JavaScript", img: "", title: "Example", text: "This is example"}]);
  const [categoryDev, handleCategoryDev] = useState(['JavaScript', 'Python', 'C++']);
  const [categoryDaily, handleCategoryDaily] = useState(['일상']);
  const [isSide, handleIsSide] = useState(true);

  return (
    <>
    <div className="container">
      <Route path="/" component={Intro} exact/>
      <Route path="/JavaScript" render={() => <JavaScript data={data}/>} exact/>
      <Route path="/write" render={() => <Write data={data} handleData={handleData.bind(this)} handleIsSide={handleIsSide.bind(this)}/>}/>
      { isSide === true ?
        <SideMenu 
        handleCategoryDev={handleCategoryDev.bind(this)} 
        handleCategoryDaily={handleCategoryDaily.bind(this)} 
        categoryDev={categoryDev} 
        categoryDaily={categoryDaily}
        />
        :
        null
      }
      <AddBtn handleIsSide={handleIsSide.bind(this)} isSide={isSide}/>
    </div>
    </>
  );
}

export default App;

import React, {useState, useEffect} from "react";
import './App.css';
import {BrowserRouter,Switch,Route,Link,} from "react-router-dom";
import Cat from "./components/Cat"
import UpdateCat from "./components/UpdateCat"
const App = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const CreateCate = async () => {
        const response = await fetch("https://api.thecatapi.com/v1/categories")
        const Catdata = await response.json()
        setCategories(Catdata)
       } 
       CreateCate()
  }, [])
  return ( 
  <BrowserRouter> 
    <div className="container"> 
      <ul className="catUl">{ 
        categories.map(cat =>
          <li key={cat.id}>
            <Link className="categorieslink" to={`/cats/${cat.name}/${cat.id}`} >
                {cat.name}
            </Link>
          </li>
              ) 
      } 
      </ul> 
      <Switch> 
        <Route exact path="/" component={Cat} /> 
        <Route path="/cats/:categorie/:id" component={UpdateCat} /> 
      </Switch> 
    </div > 
  </BrowserRouter > 
  )
}

export default App
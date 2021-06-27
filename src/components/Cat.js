import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_CAT, CREATE_CAT } from "../actions/types.js";
const Cat = () => {
    const [page, setPage] = useState(1)
    const Cats = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(()=>{
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then(cat => {
          dispatch({ type: ADD_CAT, payload: cat})
          
        })
      },[])
      const addCats = async () => {
        const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        const data = await res.json()
        setPage((prevState) => prevState + 1)
        dispatch({ type: CREATE_CAT, payload: data })
      }
    return (
        <>
        <ul className="catsimagelist">
            {Cats.map((cat, i) => 
                <li key={i}>
                    <img src={cat.url} className="catsimg" alt={cat.id} />
                </li>)}
        </ul>
        <button onClick={addCats} className="addimages">Create Cet</button>
        </>
    )
}

export default Cat
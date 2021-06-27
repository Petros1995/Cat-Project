import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ADD_CAT, CREATE_CAT } from "../actions/types.js";
const UpdateCat = () => {
    const [page, setPage] = useState(1)
    const { id } = useParams()
    const Cats = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(() => {
        const getCats = async () => {
         const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`)
        const data = await res.json()
        dispatch({ type: ADD_CAT, payload: data })    
        }
        getCats()   
    }, [id, dispatch])
    const addCats = async () => {
            const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page + 1}&category_ids=${id}`)
            const data = await res.json()
            setPage((prevState) => prevState + 1)
            dispatch({ type: CREATE_CAT, payload: data })
          }
    return (
    <> 
        <div className="imagescontainer">
            <ul className="catsimagelist">
                {Cats.map((e, i) =>
                <li key={i}>
                     <img src={e.url} className="catsimg" alt={e.id} />
                </li>)}
            </ul> 
            <button onClick={addCats} className="addimages">Edd Cat</button>
        </div>
    </>)
}
export default UpdateCat
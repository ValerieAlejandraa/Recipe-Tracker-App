import React from "react"



const Recipe = ({recipe, handleDelete}) => {
    return (
        <tr>
        <td><p>{(recipe.name)}</p></td>
        <td><p>{(recipe.cuisine)}</p></td>
        <td><p>{<img className="recipe-photo" src={recipe.photo} alt={recipe.photo}/>}</p></td>
        <td className="content_td"><p>{(recipe.ingredients)}</p></td>
        <td className="content_td"><p>{(recipe.preparation)}</p></td>
        <td><button onClick={handleDelete} name="delete">Delete</button></td>
        </tr>
      );
}
 
export default Recipe;
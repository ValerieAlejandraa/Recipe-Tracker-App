//import { getByDisplayValue } from "@testing-library/react";
import React, { useState } from "react";

function RecipeCreate({createRecipes}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
    action: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = ({ target }) =>
    setFormData({
      ...formData,
      [target.name]: target.value,
    });


  const handleSubmit = (e) => {
    e.preventDefault()
    createRecipes(formData)
    setFormData(initialFormState)
  }


  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
      
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  placeholder="photo"
                  required={true}
                  onChange={handleChange}
                  value={formData.photo}
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  type="textarea"
                  name="ingredients"
                  placeholder="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  type="textarea"
                  name="preparation"
                  placeholder="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  required={true}
                  row={3}
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

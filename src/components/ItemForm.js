import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState('')  
  const [category, setCategory] = useState('')
  
  function handleName (e) {
    setName(e.target.value)
  }
    
  function handleCategory (e) {
    setCategory(e.target.value)
}

  function handleSubmit(e) {
    e.preventDefault()

    onItemFormSubmit(items => [...items, {name, category}])

    }
  
  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

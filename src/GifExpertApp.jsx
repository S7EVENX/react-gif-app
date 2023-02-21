import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    //Para no repetir la categoira
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    //setCategories(cat => [...cat, 'Valorant']);
  };

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories= { setCategories }
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de Gif */}
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      

      {/* Gif item */}
    </>
  );
};

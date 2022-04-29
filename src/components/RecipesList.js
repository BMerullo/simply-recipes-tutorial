import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe, index) => {
        const { id, title, image, prepTime, cookTime } = recipe;
        console.log(image);

        return (
          <Link key={id} to={`/${title}`} className="recipe">
            <GatsbyImage
              image={image.GatsbyImageData}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Prep : {prepTime}min | Cook : {cookTime}min
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesList;

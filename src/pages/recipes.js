import React from "react";
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import TagsList from "../components/TagsList";

const Recipes = ({ recipes }) => {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Recipes;

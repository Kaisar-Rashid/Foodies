import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

const Favourites = () => {
  const { favouritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in Favorites
          </p>
        </div>
      )}
    </div>
  );
};

export default Favourites;

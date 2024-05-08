import { useGlobalState } from "../hooks/useGlobalState";

import { renderAuthors } from "../utils/renderItems";

const FavoriteAuthors = () => {
  const { state } = useGlobalState();

  return (
    <>
      <section className="">
        <h2 className="">Favorite Authors:</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderAuthors(state.favoriteAuthors, true, false)}
        </ul>
      </section>
    </>
  );
};

export default FavoriteAuthors;

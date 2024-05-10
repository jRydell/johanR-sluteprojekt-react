import { useGlobalState } from "../hooks/useGlobalState";
import { renderBooks } from "../utils/renderItems";

const FavoriteBooks = () => {
  const { state } = useGlobalState();

  return (
    <>
      <section className="">
        <h2 className="">Favorite Books:</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderBooks(state.favoriteBooks, true, false, false, false)}
        </ul>
      </section>
    </>
  );
};

export default FavoriteBooks;

import { useGlobalState } from "../hooks/useGlobalState";
import { renderBooks } from "../utils/renderBooks";

const ReadBooks = () => {
  const { state } = useGlobalState();

  return (
    <>
      <section>
        <h2 className="">Read Books:</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderBooks(state.readBooks, false)}
        </ul>
      </section>
    </>
  );
};

export default ReadBooks;

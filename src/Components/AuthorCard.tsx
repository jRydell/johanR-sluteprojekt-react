import { Author } from "../types/types";

type AuthorCardProps = {
  author: Author;
};

const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <>
      <section>
        <h3 className="text-lg font-semibold">
          <p>Name: </p>
          {author.author_name}
        </h3>
        {/* <p className="text-sm text-gray-500 mb-2">Name: {author.author}</p>
        <p className="text-sm text-gray-500">
          First Publish Year: {author.first_publish_year}
        </p> */}
      </section>
    </>
  );
};

export default AuthorCard;

import Image from "next/image";
import Link from "next/link";

const BookCard = ({book}) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <figure>
        <Image
          src={book.image_url}
          alt={book.title}
          width={200}
          height={250}
          className="w-full h-60 object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>

        <Link href={`/books/${book.id}`}>
          <button className="btn bg-linear-to-r from-indigo-500 to-purple-600 text-white w-full">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;

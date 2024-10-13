import { Link } from "react-router-dom";

const BackButton = (destination = "/") => {
  return (
    <div className="flex">
      <Link
       to = '/'
       className = 'bg-sky-800 text-white px-4 py-1 rounded-lg w-fit' 
      >
      BackButton
      </Link>
    </div>
  );
};

export default BackButton;

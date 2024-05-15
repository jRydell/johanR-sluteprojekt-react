type ButtonProps = {
  children: React.ReactNode;
  handleClick: () => void;
};

const Button = ({ children, handleClick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none active:bg-red-500 active:hover:bg-red-700 "
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;

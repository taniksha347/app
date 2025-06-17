// Button.js
const Button = ({ text, onClick, className }) => {
  return (
      <button
          onClick={onClick}
          className={`px-6 py-2 text-white bg-blue-600 rounded-lg transition-all duration-300 ease-in-out 
                      hover:bg-blue-500 hover:text-black hover:-translate-y-1 active:scale-95 font-semibold 
                      ${className}`}>
          {text} {/* Render the button text */}
      </button>
  );
};

export default Button;
const Button = ({ children, className, onClick }) => (
    <button className={`py-2 px-4 rounded-lg shadow ${className}`} onClick={onClick}>
      {children}
    </button>
  );
  
  export { Button };
  
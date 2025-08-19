import './Container.css'

function Container({ children, className }) {
  return (
    <div className={`my-container ${className || ""}`}>
      {children}
    </div>
  );
}

export default Container;
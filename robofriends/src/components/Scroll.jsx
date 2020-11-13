const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid #0ccac4',
        height: '500px',
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;

export const Loading = ({ active, message }) => {
  return (
    <div className={`${active ? "show" : ""} containerLoading`}>
      <span className="Spinner"></span>
      <p>{message}</p>
    </div>
  );
};

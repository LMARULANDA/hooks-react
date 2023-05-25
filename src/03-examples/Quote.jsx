export const Quote = ({name, status}) => {
  return (
    <>
      <blockquote className="blackquote text-end">
        <p className="mb-4">{name}</p>
        <footer className="blockquote-footer">{status}</footer>
      </blockquote>
    </>
  );
};

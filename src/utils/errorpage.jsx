import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  //   console.log(error)
  return (
    <>
      <h2>
        Error: {error.status}, {error.statusText}
      </h2>
      <p>{error.data}</p>
    </>
  );
};

export default ErrorElement;

import ViewError from "../ViewError/ViewError";

function ErrorPage() {
  const errorMessage = "ERROR: nonexistent page";
  return <ViewError>{errorMessage}</ViewError>;
}

export default ErrorPage;

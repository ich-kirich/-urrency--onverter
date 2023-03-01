function ViewError(props: { children: React.ReactNode }) {
  const { children } = props;
  return <h1>There was an error ${children}</h1>;
}

export default ViewError;

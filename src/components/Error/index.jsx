export default function Error({ errorMsg }) {
  return (
    <main>
      {errorMsg ? (
        <p>{errorMsg}</p>
      ) : (
        <div>
          <p>There was an internal error!</p>
          <p>Please try again later.</p>
        </div>
      )}
    </main>
  );
}

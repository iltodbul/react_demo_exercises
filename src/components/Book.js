function Book(props) {
  if (!props.title) {
    return (
      <article>
        <h3>Book title: No information provided</h3>
      </article>
    );
  }

  return (
    <article>
      <h3 onClick={props.clickHandler}>Book title: {props.title}</h3>
      <p>Book description: {props.description || 'No description provided'}</p>
    </article>
  );
}

export default Book;

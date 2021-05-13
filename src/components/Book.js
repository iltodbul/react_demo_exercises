function Book(props) {
  return (
    <article>
      <h3 onClick={props.clickHandler}>Book title: {props.title}</h3>
      <p>Book description: {props.description || 'No description provided'}</p>
    </article>
  );
}

export default Book;

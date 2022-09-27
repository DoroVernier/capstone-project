import { nanoid } from 'nanoid';
import { useState } from 'react';
import styled from 'styled-components';

export default function CreateCard({ onAddBook }) {
  const initialCount = 0;
  const [titleCount, setTitleCount] = useState(0);
  const titleCounter = (event) => {
    setTitleCount(event.target.value.length);
  };

  const [authorCount, setAuthorCount] = useState(0);
  const authorCounter = (event) => {
    setAuthorCount(event.target.value.length);
  };

  const resetCount = () => {
    setTitleCount(initialCount);
    setAuthorCount(initialCount);
  };

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value.replace(/\s+/g, ' ').trim();
    const author = form.author.value.replace(/\s+/g, ' ').trim();
    const newCard = { id: nanoid(), title: title, author: author };

    onAddBook(newCard);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Note htmlFor="title">
        Title, author or ISBN:
        <NoteField
          type="text"
          name="title"
          id="title"
          placeholder="(required)..."
          maxLength="70"
          onChange={titleCounter}
          required
        />
        <Counter>{titleCount}/70</Counter>
      </Note>
      <br />
      <Note htmlFor="author">
        Further info:
        <NoteField
          type="text"
          name="author"
          id="author"
          placeholder="(optional)..."
          maxLength="70"
          onChange={authorCounter}
        />
      </Note>
      <Counter>{authorCount}/70</Counter>
      <WishButton onClick={resetCount}>Wish</WishButton>
    </form>
  );
}

const WishButton = styled.button`
  margin-left: 1rem;
  background-color: red;
  border: 1px solid black;
  border-radius: 50%;

  padding: 0.5rem;
`;
const Note = styled.label`
  margin-left: 3rem;
  color: rgb(228, 229, 242);
  font-size: 1.5rem;
`;
const NoteField = styled.input`
  margin-left: 1rem;
  height: 2rem;
`;

const Counter = styled.span`
  margin-left: 0.5rem;
  font-size: 1rem;
  color: rgb(228, 229, 242);
`;

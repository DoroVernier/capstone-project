import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';
import closedEye from '../public/closedEye.png';
import openEye from '../public/openEye.png';
import bin from '../public/bin.png';

export default function BookCard({ title, author, onDelete }) {
  const [read, setRead] = useState(false);
  const handleClick = () => {
    setRead(!read);
  };

  return (
    <Container>
      <Card>
        <Title>{title}</Title>
        <Author>{author}</Author>

        <IconWrapper>
          <Toggle onClick={handleClick}>
            <Icon>
              <Image
                alt={read ? 'open eye' : 'closed eye'}
                layout="responsive"
                src={read ? openEye : closedEye}
                width={64}
                height={64}
              />
            </Icon>
          </Toggle>
        </IconWrapper>

        <Delete onClick={onDelete}>
          <Image
            alt="bin"
            layout="responsive"
            src={bin}
            width={64}
            height={64}
          />
        </Delete>
      </Card>
    </Container>
  );
}

const Container = styled.ul`
  list-style: none;
`;
const Card = styled.li`
  background-color: rgba(228, 229, 242, 0.5);
  display: grid;
  gap: 1rem;

  grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-items: center;
  border-radius: 2rem;
  padding: 10px;
  width: 80vw;
`;
const Title = styled.h2`
  grid-column-start: 1;
`;
const Author = styled.h3`
  grid-column-start: 1;
`;

const IconWrapper = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  height: 2.5rem;
  width: 2.5rem;
`;

const Toggle = styled.button`
  background-color: transparent;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  grid-column-start: 2;
  grid-row-start: 1;
  cursor: pointer;
`;
const Icon = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  height: 2rem;
  width: 2rem;
`;

const Delete = styled.button`
  grid-column-start: 2;
  height: 2rem;
  width: 2rem;
  background-color: transparent;
  border: none;
`;

import styled from 'styled-components';
import Card from './Card';
import faker from 'faker';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const StyledPage = styled('div')`
  .page-card {
    max-width: 60ch;
    margin: 1rem;
  }
  p {
    margin-top: 1em;
  }
`;

const Page = () => {
  const [lorems, setLorems] = useState([]);
  const { pathname } = useLocation();

  // render different lorem based on path
  useEffect(() => {
    const lorems = [...Array(2)].map(() => faker.lorem.paragraphs(2));
    setLorems(lorems);
  }, [pathname]);

  return (
    <StyledPage>
      <Card title={pathname.slice(1)} className="page-card">
        {lorems.map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </Card>
    </StyledPage>
  );
};

export default Page;

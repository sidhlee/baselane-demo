import styled from 'styled-components';

const StyledCard = styled.article`
  background: white;
  border: 1px solid var(--cl-border);
  border-radius: var(--border-radius);

  h2 {
    font-size: var(--fz-h2);
    padding: 0.75em 1.5em;
    border-bottom: 1px solid var(--cl-border);
    text-transform: capitalize;
  }

  .card-body {
    padding: 0.75em 1.5em;
  }
`;

const Card = ({ title, children, className }) => {
  return (
    <StyledCard className={className}>
      <h2>{title}</h2>
      <div className="card-body">{children}</div>
    </StyledCard>
  );
};

export default Card;

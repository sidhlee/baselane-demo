import styled from 'styled-components';

const Styled = styled.section`
  h3 {
    font-size: var(--fz-h2);
    margin: 0.5rem 0 2rem;
  }

  ul {
    display: flex;
    justify-content: space-between;

    .overview-col {
      /* give each item equal-width */
      flex: 1 1 auto;
      text-align: ${({ $left }) => ($left ? 'left' : 'center')};
      h4 {
        font-size: 0.75rem;
        color: var(--text-muted);
        margin-bottom: 0.75em;
      }
      span {
        font-size: 2rem;
        font-weight: 600;
      }
      padding-right: 1.5em;
      &:not(:first-of-type) {
        border-left: 1px solid var(--cl-border);
        padding-left: 1.5em;
      }
    }
  }
`;

const Overview = ({ left, columns }) => {
  const cols = columns.map((col) => (
    <li key={col.heading} className="overview-col">
      <h4>{col.heading}</h4>
      {col.body}
    </li>
  ));
  return (
    <Styled $left={left}>
      <h3>Overview</h3>
      <ul>{cols}</ul>
    </Styled>
  );
};

export default Overview;

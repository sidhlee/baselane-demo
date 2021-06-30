import styled from 'styled-components';
import Card from '../../components/Card';
import faker from 'faker';
import MetricItem from './MetricItem';

const StyledPortfolioMetrics = styled(Card)`
  min-width: 400px;
  h3 {
    font-size: 0.9rem;
    margin: 1.5em 0;
  }

  section:not(:last-of-type) {
    &::after {
      content: '';
      display: block;
      height: 1px;
      background-color: var(--cl-border);
    }
  }
`;

const coreMetrics = [
  {
    label: 'Current Market Value',
    value: '$3.40M',
    info: faker.lorem.words(10),
  },
  {
    label: 'Historical Purchase Value',
    value: '$2.64M',
    info: faker.lorem.words(10),
  },
  {
    label: 'Estimated Appreciation',
    value: '$0.76M',
    info: faker.lorem.words(10),
  },
];

const resultsMetrics = [
  {
    label: 'Net Operating Income',
    value: '$20,760',
    info: faker.lorem.words(10),
  },
  {
    label: 'Return on Equity',
    value: '10.1%',
    info: faker.lorem.words(10),
  },
  {
    label: 'Cap Rate',
    value: '8.3%',
    info: faker.lorem.words(10),
  },
  {
    label: 'Cash-On-Cash Return',
    value: '11.5%',
    info: faker.lorem.words(10),
  },
];

const PortfolioMetrics = () => {
  return (
    <StyledPortfolioMetrics title="Portfolio Metrics">
      <section>
        <h3>Core metrics</h3>
        <ul>
          {coreMetrics.map((m) => (
            <MetricItem key={m.label} metric={m} />
          ))}
        </ul>
      </section>
      <section>
        <h3>YTD Results</h3>
        <ul>
          {resultsMetrics.map((m) => (
            <MetricItem key={m.label} metric={m} />
          ))}
        </ul>
      </section>
    </StyledPortfolioMetrics>
  );
};

export default PortfolioMetrics;

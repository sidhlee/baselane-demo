import Card from '../../components/Card';
import Overview from '../../components/Overview';
import styled from 'styled-components';
import CashFlowChart from './CashFlowChart';

const StyledCashFlow = styled(Card)`
  width: 80%;
  .mo-cf {
    margin-top: 2rem;
  }
`;

const cashFlowOverview = [
  { heading: 'Net Cashflow YTD', body: <span>$20,760</span> },
  { heading: 'Revenue YTD', body: <span>$108,600</span> },
  { heading: 'Expense YTD', body: <span>$87,840</span> },
];

const CashFlow = () => {
  return (
    <StyledCashFlow title="Cash Flow">
      <Overview left columns={cashFlowOverview} />
      <section className="mo-cf">
        <h3>Monthly Cash Flow</h3>
        <CashFlowChart />
      </section>
    </StyledCashFlow>
  );
};

export default CashFlow;

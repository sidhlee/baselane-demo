import styled from 'styled-components';
import CashFlow from './Cashflow';
import PortfolioMetrics from './PortfolioMetrics';

const StyledDashboard = styled('div')`
  padding: 1rem;
  background: var(--cl-bg);
  min-height: 100vh;
`;

const Dashboard = () => {
  return (
    <StyledDashboard>
      <div className="row">
        <CashFlow />
        <PortfolioMetrics />
      </div>
    </StyledDashboard>
  );
};

export default Dashboard;

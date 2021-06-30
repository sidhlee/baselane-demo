import styled from 'styled-components';
import SideNav from '../features/navigation/SideNav';

const StyledLayout = styled('div')`
  padding-left: var(--w-sidebar);
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <SideNav />
      {children}
    </StyledLayout>
  );
};

export default Layout;

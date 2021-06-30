import styled from 'styled-components';
import logo from '../images/logo-white.png';

const StyledLogo = styled('div')`
  width: 30px;
`;

const LogoWhite = () => {
  return (
    <StyledLogo className="LogoWhite">
      <img src={logo} alt="baselane" />
    </StyledLogo>
  );
};

export default LogoWhite;

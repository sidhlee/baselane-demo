import styled from 'styled-components';
import LogoWhite from '../../components/LogoWhite';
import MainMenu from './MainMenu';
import UserMenu from './UserMenu';

const StyledSideNav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 1rem 0;
  background: var(--cl-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--w-sidebar);

  /* logo and nav links */
  a {
    color: white;
  }

  .LogoWhite {
    margin-bottom: 1rem;
  }

  /* nav links */
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    li {
      width: 100%;
      &:not(:last-of-type) {
        margin-bottom: 1em;
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0.4em;
        padding-bottom: 0.4em;
        width: 100%;
        font-size: 1.3rem;
        opacity: 0.6;
        transition: opacity 200ms ease;
        &.active,
        &:hover {
          opacity: 1;
        }
        &.active {
          background: rgba(255, 255, 255, 0.1);
          position: relative;
          &::before {
            content: '';
            display: block;
            position: absolute;
            height: 100%;
            width: 4px;
            top: 0;
            left: 0;
            background: var(--cl-secondary);
          }
        }
      }
    }
  }
`;

const SideNav = () => {
  return (
    <StyledSideNav>
      <LogoWhite />
      <MainMenu />
      <UserMenu />
    </StyledSideNav>
  );
};

export default SideNav;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  HiOutlineKey,
  HiOutlineUserGroup,
  HiOutlineCreditCard,
  HiOutlineSupport,
} from 'react-icons/hi';

const StyledUserMenu = styled.ul``;

const UserMenu = () => {
  return (
    <StyledUserMenu className="UserMenu">
      <li>
        <NavLink to={`/access`}>
          <HiOutlineKey />
        </NavLink>
      </li>
      <li>
        <NavLink to={`/tenants`}>
          <HiOutlineUserGroup />
        </NavLink>
      </li>
      <li>
        <NavLink to={`/payment`}>
          <HiOutlineCreditCard />
        </NavLink>
      </li>
      <li>
        <NavLink to={`/support`}>
          <HiOutlineSupport />
        </NavLink>
      </li>
    </StyledUserMenu>
  );
};

export default UserMenu;

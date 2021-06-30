import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  HiOutlineOfficeBuilding,
  HiOutlineTrendingUp,
  HiOutlineChartBar,
} from 'react-icons/hi';
import { BiGridAlt } from 'react-icons/bi';
import { RiExchangeDollarLine } from 'react-icons/ri';

const StyledMainMenu = styled('ul')``;

const MainMenu = () => {
  return (
    <StyledMainMenu className="MainMenu">
      <li>
        <NavLink to={`/dashboard`} exact>
          <BiGridAlt />
        </NavLink>
      </li>
      <li>
        <NavLink to={`/cashflow`}>
          <RiExchangeDollarLine />
        </NavLink>
      </li>
      <li>
        <NavLink to={`/stats`}>
          <HiOutlineChartBar />
        </NavLink>
      </li>
      <li>
        <NavLink to={`/trends`}>
          <HiOutlineTrendingUp />
        </NavLink>
      </li>
      <li>
        <NavLink to={`/property`}>
          <HiOutlineOfficeBuilding />
        </NavLink>
      </li>
    </StyledMainMenu>
  );
};

export default MainMenu;

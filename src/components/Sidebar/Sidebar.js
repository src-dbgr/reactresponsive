import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRouter,
  SidebarWrapper,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen}>
      <Icon>
        <CloseIcon onClick={props.toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={props.toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={props.toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={props.toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={props.toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRouter to="/signin">Sign In</SidebarRouter>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

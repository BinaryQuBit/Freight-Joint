import React, { useState } from 'react';
import {
  Flex,
  IconButton,
  Divider,
  useColorMode,
  Switch,
  FormLabel,
} from '@chakra-ui/react';
import {
  FiMenu,
  FiTruck,
  FiLogOut,
  FiHome,
} from 'react-icons/fi';
import NavItem from '../DashboardNavBar';
import Logo from '../../DashboardLogo';
import { useNavigate } from "react-router-dom";

export default function ShipperSideBar({activePage}) {
  const [navSize, changeNavSize] = useState("large");
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const navigate = useNavigate();

  return (
    <Flex
        paddingTop={10}
        pos="fixed"
        top="0"
        zIndex="10"
        pt={10}
        h="100vh"
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
        w={navSize === "small" ? "75px" : "200px"}
        flexDir="column"
        justifyContent="flex-start"
        background={isDark ? "#343541" : "#E4E9F7"}
    >
      <Flex
        align="center"
        justify="center"
        p="5%"
        h="20%"
      >
        <Logo color={isDark ? 'white' : '#0866FF'} />
      </Flex>
      <Flex
        flexDir="column"
        as="nav"
        align="center"
        p="5%"
        flexGrow={1}
      >
        <IconButton
          aria-label="Open Menu"
          size="lg"
          variant="ghost"
          icon={<FiMenu />}
          onClick={() => changeNavSize(navSize === "small" ? "large" : "small")}
          sx={{
            '&:hover': {
              color: 'white', background: '#0866FF'
            },
          }}
        />
        <NavItem navSize={navSize} icon={FiHome} title="Active Loads" active={activePage === "activeLoads"} onClick={() => navigate('/activeLoads')} />
        <NavItem navSize={navSize} icon={FiTruck} title="Post a Load" active={activePage === "postLoad"} onClick={() => navigate('/postLoad')}/>
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
      >
        <Divider />
        <Flex align="center" justify="space-between" margin={"3"}>
          <Switch id="dark-mode-switch" isChecked={isDark} onChange={toggleColorMode} />
          {navSize === "large" && (
            <FormLabel htmlFor="dark-mode-switch" mb="0">
              {isDark ? "Dark Mode" : "Light Mode"}
            </FormLabel>
          )}
        </Flex>
        <Flex p="5%">
          <NavItem navSize={navSize} icon={FiLogOut} title="Sign Out" onClick={() => navigate('/login')}/>
        </Flex>
      </Flex>
    </Flex>
  );
}
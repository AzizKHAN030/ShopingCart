import { Box, Flex, Link, Container, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CartIcon } from "../../icons/CartIcon";
import "./Navbar.style.scss";

type NavbarComponentProps = {
  isSmallerThan768: boolean;
};

export function NavbarComponent(props: NavbarComponentProps) {
  const { isSmallerThan768 } = props;

  return (
    <Box bg="gray.800" className="Navbar">
      <Container maxW="8xl">
        <Flex
          p="2"
          color="white"
          direction={isSmallerThan768 ? "column" : "row"}
          align={isSmallerThan768 ? "flex-start" : "center"}
        >
          <Box mb={isSmallerThan768 ? "4" : "0"}></Box>
          {isSmallerThan768 ? null : (
            <>
              <Box me="auto">
                <Link as={NavLink} mr="4" to="/">
                  Home
                </Link>
                <Link as={NavLink} mr="4" to="/about">
                  About
                </Link>
                <Link as={NavLink} mr="4" to="/store">
                  Store
                </Link>
              </Box>
              <Button colorScheme="teal" className="Navbar-CartButton">
                <CartIcon />
                <div className="Navbar-CartButton_Badge">3</div>
              </Button>
            </>
          )}
        </Flex>
      </Container>
    </Box>
  );
}

export default NavbarComponent;

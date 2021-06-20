import styled from "styled-components";

const Nav = () => {
  return (
    <Navbar>
      <Title>Shoprrr</Title>
      <NavUL>
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
      </NavUL>
    </Navbar>
  );
};

const Navbar = styled.nav`
  height: 100px;
  background-color: #828e82;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  margin-left: 15px;
`;

const NavUL = styled.ul`
  font-family: "Roboto", sans-serif;
  margin-right: 25px;
  display: flex;
  justify-content: space-between;
  width: 200px;
  list-style-type: none;
`;

export default Nav;

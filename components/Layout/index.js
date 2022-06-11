import { Footer, Main } from "./styles";
import Social from "../Social";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <Social />
      <Main>{children}</Main>
      <Footer>
        <p>© 2022 by Yaz Uraz with Ice Digital</p>
      </Footer>
    </>
  );
};

export default Layout;

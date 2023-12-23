import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../../components/Loading/Loading";
const MainLayout = () => {
  const navitgation = useNavigation();
  return (
    <>
      <Header />

      {navitgation.state === "loading" ? <Loading /> : <Outlet />}

      <Footer />
    </>
  );
};

export default MainLayout;

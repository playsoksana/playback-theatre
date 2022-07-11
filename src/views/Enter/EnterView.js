import { useEffect, useState } from "react";
import {  useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";


import {operationRegistration, operationLogin} from '../../Redux/auth/operation'
import Container from "../../components/Container";
import Login from "../../components/Forms/Login";
import Registration from "../../components/Forms/Registration";

const EnterView = () => {
  const [state, setState] = useState({});
  const [pathLocation, setPathLocation] = useState("");
  const dispatch = useDispatch();

  const location = useLocation();
  useEffect(() => {
 
    if (location.pathname === "/enter/login") {
      setPathLocation("login");
    } else {
      setPathLocation("registration");
    }
  }, [location.pathname]);

  function onSubmitLogin(data) {
    setState(data);
    console.log(state);
    dispatch(operationLogin(data))
  }

  function onSubmitRegistration(data) {
    setState(data);
    console.log(state);
    dispatch(operationRegistration(data))
  }

  return (
    <section>
        <Container>
      {pathLocation === "registration" && (
        <Registration onSubmitForm={onSubmitRegistration}></Registration>
      )}

      {pathLocation === "login" && <Login onSubmitForm={onSubmitLogin}></Login>}
      </Container>
    </section>
  );
};
export default EnterView;

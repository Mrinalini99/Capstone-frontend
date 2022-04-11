import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import Manager from "./components/manager/Manager";
import CreateUser from "./components/manager/CreateUser";
import Users from "./components/manager/Users";
import History from "./components/manager/History";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      {/* <AccountBox /> */}
      {/* <Manager/> */}
      <History/>
      {/* <Users/> */}
      {/* <CreateUser/> */}
    </AppContainer>
  );
}

export default App;

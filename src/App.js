import FirstScreen from "./screens/FirstScreen";
import "./App.css"
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
import BasicAccordion from "./components/Akordion";
import DetailsPage from "./screens/DetailsPage";
import ForthScreen from "./screens/ForthScreen";
import FifthScreen from "./screens/FifthScreen";
import ByMe from "./screens/ByMe";
import SocialMedia from "./screens/SocialMedia";
import Reccomends from "./components/Reccomends";
import DrawerAppBar from "./components/phoneNavBar/MuiNav";

function App() {
  return<>
 {/* <DrawerAppBar/> */}
  <FirstScreen/>
  <FifthScreen/>
  <ThirdScreen/>
  <SecondScreen/>
  <DetailsPage/>
<BasicAccordion/>
<Reccomends/>
<ForthScreen/>

<SocialMedia/>
<ByMe/>
{/* <DetailsPage/> */}
  </>
}

export default App;

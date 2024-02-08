import FirstScreen from "./screens/FirstScreen";
import "./App.css"
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
import BasicAccordion from "./components/Akordion";
import DetailsPage from "./screens/DetailsPage";
import ForthScreen from "./screens/ForthScreen";
import FifthScreen from "./screens/FifthScreen";
import ByMe from "./screens/ByMe";

function App() {
  return<>
  <FirstScreen/>
  <FifthScreen/>
  <ThirdScreen/>
  <SecondScreen/>
  <DetailsPage/>
<BasicAccordion/>

<ForthScreen/>
<ByMe/>
{/* <DetailsPage/> */}
  </>
}

export default App;

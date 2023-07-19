import Preview from "./components/bannerPreview/Preview";
import FirstLook from "./components/first_look/FirstLook";
import BestOfAir from "./components/bestOfAir/BestOfAir";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import StepInto from "./components/stepInto/StepInto";
import GearUp from "./components/gearup/GearUp";
import Dontmiss from "./components/dontmiss/Dontmiss";
import Essentials from "./components/essentials/Essentials";
import Catalog from "./components/catalog/Catalog";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Preview />
      <FirstLook />
      <BestOfAir />
      <Featured />
      <StepInto />
      <GearUp />
      <Dontmiss />
      <Essentials />
      <Catalog />
    </Layout>
  );
}

export default App;

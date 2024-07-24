import Accordian from "./components/accordian";
import "./App.css";
import WysiwygEditor from "./components/WYSIWYG/index.jsx";

import FeatureFlags from "./components/FeatureFlag/index.jsx"
import FeatureFlagGlobalState from "./components/FeatureFlag/context/index.jsx";

function App() {
  return (
    <div className="App">      
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>

      <WysiwygEditor />
    </div>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import PageTemplate from "./template/PageTemplate";
import RequiredInput from "./Components/RequiredInput";
function App() {
    return (

<Router>
      <Routes>
        <Route path="/*" element={<PageTemplate />}>
          <Route path="home" element={<Landing></Landing>} />
          <Route path="hireme" element={<RequiredInput></RequiredInput>} />
          


        </Route>
      </Routes>
    </Router>





    );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/home/Home";
import Instructions from "./pages/Instructions";
import Rules from "./pages/Rules";
import FAQ from "./pages/FAQ";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gyakran-ismetelt-kerdesek" element={<FAQ />} />
          <Route path="utmutato" element={<Instructions />} />
          <Route path="szabalyzat" element={<Rules />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

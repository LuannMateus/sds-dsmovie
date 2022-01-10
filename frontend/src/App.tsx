import { Navbar } from 'components/Navbar';
import { Form } from 'pages/Form';
import { Listing } from 'pages/Listing';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/form">
            <Route path=":movieId" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

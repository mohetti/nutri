import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './redux/hooks';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { RequireAuth, RequireUnAuth } from './AuthChecks';

// make custom hook usefetch
function Test({ children }: { children: JSX.Element }) {
  return children;
}
function Child1() {
  return <div>Hi</div>;
}

function App() {
  return (
    <div id='app'>
      <Routes>
        <Route
          path='/'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path='/test'
          element={
            <Test>
              <Child1 />
            </Test>
          }
        />
        <Route
          path='login'
          element={
            <RequireUnAuth>
              <Login />
            </RequireUnAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

/*

const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    async function fetchProduct() {
      let nutri = await fetch('https://www.foodrepo.org/api/v3/products/2030', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token token=77fa9ebf0491fa8b3b63732cfebaa7b2',
        },
      });
      let response = await nutri.json();
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    }
    fetchProduct();
  }, []);
*/

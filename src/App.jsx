import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthenticationPage from "./Pages/AuthenticationPage";
import Body from "./Pages/Body";
import ProtectedRoute from "./Components/ProtectedRoute";
import WatchPage from "./Pages/WatchPage";

const route = createBrowserRouter([
  {
    path: "/login",
    element: <AuthenticationPage />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Body />
      </ProtectedRoute>
    ),
  },
  {
    path: "/watch",
    element: (
      <ProtectedRoute>
        <WatchPage />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;

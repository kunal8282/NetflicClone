import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthenticationPage from "./Pages/AuthenticationPage";
import Body from "./Pages/Body";
import ProtectedRoute from "./Components/ProtectedRoute";
import WatchPage from "./Pages/WatchPage";
import { AuthProvider } from "./Components/AuthProvider";
import HomePage from "./Pages/HomePage";
import { lazy, Suspense } from "react";
import Loader from "./Components/Loader";

const GPTSearchPage = lazy(() => import("./Components/GPTSearchComponent"));
const SearchPage = lazy(() => import("./Components/SearchComponent"));

const route = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen bg-black">
            <Loader />
          </div>
        }
      >
        <AuthenticationPage />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Body />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "gptSearch",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen bg-black">
                <Loader />
              </div>
            }
          >
            <ProtectedRoute>
              <GPTSearchPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "search",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen bg-black">
                <Loader />
              </div>
            }
          >
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
    ],
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
  return (
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  );
}

export default App;

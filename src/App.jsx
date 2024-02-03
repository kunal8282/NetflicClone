import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Pages/Body";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthProvider } from "./Components/AuthProvider";
import HomePage from "./Pages/HomePage";
import { lazy, Suspense } from "react";
import Loader from "./Components/Loader";
import VideoPlayerComponent from "./Components/VideoPlayerComponent";


const AuthenticationPage = lazy(() => import("./Pages/AuthenticationPage"));
const GPTSearchPage = lazy(() => import("./Components/GPTSearchComponent"));
const SearchPage = lazy(() => import("./Components/SearchComponent"));
const WatchPage = lazy(() => import("./Pages/WatchPage"));
const MyListPage = lazy(() => import("./Pages/MyListPage"));

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
      {
        path: "watch/:id",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen bg-black">
                <Loader />
              </div>
            }
          >
            <ProtectedRoute>
              <WatchPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "myList",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen bg-black">
                <Loader />
              </div>
            }
          >
            <ProtectedRoute>
              <MyListPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/video/:id",
    element: (
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen bg-black">
            <Loader />
          </div>
        }
      >
        <ProtectedRoute>
          <VideoPlayerComponent />
        </ProtectedRoute>
      </Suspense>
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

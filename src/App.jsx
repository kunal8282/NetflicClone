import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Pages/Body";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthProvider } from "./Components/AuthProvider";
import { lazy, Suspense } from "react";
import Loader from "./Components/Loader";

const HomePage = lazy(() => import("./Pages/HomePage"));
const AuthenticationPage = lazy(() => import("./Pages/AuthenticationPage"));
const GPTSearchPage = lazy(() => import("./Components/GPTSearchComponent"));
const SearchPage = lazy(() => import("./Components/SearchComponent"));
const WatchPage = lazy(() => import("./Pages/WatchPage"));
const MyListPage = lazy(() => import("./Pages/MyListPage"));
const VideoPlayerComponent = lazy(() =>
  import("./Components/VideoPlayerComponent")
);

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
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen bg-black">
                <Loader />
              </div>
            }
          >
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          </Suspense>
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

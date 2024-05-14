import { Navigate, createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import './App.css';
import WebLayout from './layouts/WebLayout'
import HomePage from './pages/HomePage'
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import SingleCategory from './pages/SingleCategory';
import ImageUpload from './pages/ImageUpload';
const router = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "ContactUs",
        element: <ContactUs />,
      },
      {
        path: "Gallery",
        element: <Gallery />,
      },
      {
        path: "Shop",

        children: [
          {
            index: true,
            element: <Shop />
          },
          {
            path: ":categoryid",
            element: <SingleCategory />
          }

        ]

      },
      {
        path: "image/upload",
        element: <ImageUpload />,
      }
    ]
  }

])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App; 
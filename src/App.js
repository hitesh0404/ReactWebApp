import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetails from './components/ProductDetails';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Product from './pages/Product';
import LoginForm from './components/LoginForm';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar></Navbar>
        <Home></Home>,
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <h1>HomePage</h1>
            <Carousel> </Carousel>
          </>
        ),
      },
      {
        path: "/products",
        element: (
          <>
            <Product></Product>
          </>
        ),
      },
      {
        path: "product-details/:id",
        element: (
          <>
            <ProductDetails></ProductDetails>
          </>
        ),
      },
    ],
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar></Navbar>
        <About></About>,
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar></Navbar>
        <LoginForm></LoginForm>,
      </>
    ),
  },
]);

function App() {
  return (
    <>

      <div className="container-fluid">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;



// git clone https://github.com/hitesh0404/ReactWebApp.git
// cd ReactWebApp
// npm i
// npm start
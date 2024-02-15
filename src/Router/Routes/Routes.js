import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Signup from "../../Pages/Signup/Signup";
import Login from "../../Pages/Login/Login";
import AllFlights from "../../Pages/AllFlights/AllFlights";
import Checkout from "../../Pages/Checkout/Checkout";
import Booking from "../../Pages/Booking/Booking";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/flights',
                element: <AllFlights></AllFlights>
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/flights/${params.id}`)
            },
            {
                path: '/booking',
                element: <Booking></Booking>,
                loader: () => fetch('http://localhost:5000/flightBooking')
            },

        ]
    },
    {
        path: '*',
        element: <div>Error</div>

    }
]);

export default router;
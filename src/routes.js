import Home from "./components/Home";
import Records from "./components/Records";
import RecordForm from "./components/RecordForm";
import ErrorPage from "./components/ErrorPage";


const routes = [
    {
        path:"/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path:"/records",
        element: <Records />,
        errorElement: <ErrorPage />
    },
    {
        path: "/newrecordform",
        element: <RecordForm />,
        errorElement: <ErrorPage />
    }
]

export default routes
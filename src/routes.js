import Home from "./Home";
import Records from "./Records";
import RecordForm from "./RecordForm";


const routes = [
    {
        path:"/",
        element: <Home />,
    },
    {
        path:"/records",
        element: <Records />
    },
    {
        path: "/newrecordform",
        element: <RecordForm />
    }
]

export default routes
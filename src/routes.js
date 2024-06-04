import App from './App';
import Home from './Home'
import Records from './Records'
import RecordForm from './RecordForm'
import RecordInfo from './RecordInfo';
import ErrorPage from './ErrorPage'

const routes = [
    {
      path:"/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
          errorElement: <ErrorPage />
        },
        {
          path: "/records",
          element: <Records />,
          errorElement: <ErrorPage />
        },
        {
          path: "/newrecordform",
          element: <RecordForm />,
          errorElement: <ErrorPage />
        },
        {
          path: "/records/:id",
          element: <RecordInfo />,
          errorElement: <ErrorPage />
        }
      ]
    }
  ]
  
  export default routes
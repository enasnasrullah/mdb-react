import Layout from "./components/Layout";
import {  Router } from "react-router-dom"
import Routes from "./routes/index";
import history from "./routes/History";


const App = () => {
  return (
   
    <Router history={history}>
    <Layout >{Routes}</Layout>
  </Router>   
   
  )
}
export default App;

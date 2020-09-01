import React,{ lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navigation from "./component/Navigation";
import Main from "./component/IntroComponent/Home";
import   Resume  from "./component/ResumeComponent/Resume";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/App.css";


const Portfolio = lazy(()=> import ("./component/PortfolioComponent/portfolio"));
const Projects = lazy(()=> import ("./component/PortfolioComponent/Project/Projects"));
const Contact = lazy(()=> import ("./component/ContactComponent/Contact"));
const Formation = lazy(()=> import ("./component/FormationComponent/Formation"));
const NoMatchPage = lazy(()=> import ("./component/NoMatchPage"));

const renderLoader = () => <p>Loading</p>;

const App = (props:any) => {

  return (
    <div className="wrapper">
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Navigation />
        <Suspense fallback={renderLoader()}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/formation" component={Formation} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path={`/portfolio/:id`} render={(props) => <Projects dataProject={Portfolio} {...props} />} />
          <Route component={NoMatchPage} />
          <Redirect to="/404" />
        </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;

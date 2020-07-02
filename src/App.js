import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import axios from "axios";
import "./pageTransitions/slideTransition.scss";
import "./assets/scss/main.scss";
import "./App.scss";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import Casts from "./pages/Casts";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevDepth: this.getPathDepth(this.props.location),
      cast: {},
      seasonOne: {
        overview: {},
        episodes: null,
      },
      seasonTwo: {
        overview: {},
        episodes: null,
      },
      seasonThree: {
        overview: {},
        episodes: null,
      },
    };
  }
  componentDidMount() {
    const apiUrl1 =
      "https://api.themoviedb.org/3/tv/69478/season/1?api_key=6c6774fdc0da477c7a3f3f7c03048117&language=en-US";
    axios.get(apiUrl1).then((repos) => {
      const allRepos = repos.data;

      this.setState({
        seasonOne: {
          details: {
            overview: allRepos.overview,
            poster: allRepos.poster_path,
          },
          episodes: allRepos.episodes,
        },
      });
    });

    const apiUrl2 =
      "https://api.themoviedb.org/3/tv/69478/season/2?api_key=6c6774fdc0da477c7a3f3f7c03048117&language=en-US";
    axios.get(apiUrl2).then((repos) => {
      const allRepos = repos.data;

      this.setState({
        seasonTwo: {
          details: {
            overview: allRepos.overview,
            poster: allRepos.poster_path,
          },
          episodes: allRepos.episodes,
        },
      });
    });

    const apiUrl3 =
      "https://api.themoviedb.org/3/tv/69478/season/3?api_key=6c6774fdc0da477c7a3f3f7c03048117&language=en-US";
    axios.get(apiUrl3).then((repos) => {
      const allRepos = repos.data;

      this.setState({
        seasonThree: {
          details: {
            overview: allRepos.overview,
            poster: allRepos.poster_path,
          },
          episodes: allRepos.episodes,
        },
      });
    });
  }

  componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) });
  }

  getPathDepth(location) {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter((n) => n !== "");
    return pathArr.length;
  }

  render() {
    const { location } = this.props;

    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 800, exit: 400 };

    return (
      <TransitionGroup component="div" className="App">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="pageSlider"
          mountOnEnter={false}
          unmountOnExit={true}
        >
          <div
            className={
              this.getPathDepth(location) - this.state.prevDepth >= 0
                ? "left"
                : "right"
            }
          >
            <Header />
            <Switch location={location}>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/cast" exact component={Casts} />
            </Switch>
            <Footer />
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(App);

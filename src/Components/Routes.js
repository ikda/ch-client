import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Home from "../Routes/Home";
import Explore from "../Routes/Explore";
import Profile from "../Routes/Profile";
import EditProfile from "../Routes/EditProfile";
import Feed from "../Routes/Feed";
import Notice from "../Routes/Notice";
import Rank from "../Routes/Rank";
import Test from "../Routes/Test";

const LoggedInRoutes = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/me" component={Profile} />
		<Route exact path="/me/edit" component={EditProfile} />
		<Route exact path="/feed" component={Feed} />
		<Route exact path="/notice" component={Notice} />
		<Route exact path="/rank" component={Rank} />
		<Route path="/explore" component={Explore} />
		<Route path="/test" component={Test} />
	</Switch>
);

const LoggedOutRoutes = () => (
	<Switch>
		<Route exact path="/" component={Auth} />
	</Switch>
);

const AppRouter = ({ isLoggedIn }) =>
	isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;

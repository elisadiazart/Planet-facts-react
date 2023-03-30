import Header from "./components/header/Header"
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/router/Router";

const App = () => {
	return <>
	<BrowserRouter>
		<GlobalStyles/>
		<Header/>
		<Router/>
	</BrowserRouter>
	</>
};

export default App;

import { render } from 'preact';
import { LocationProvider, Route, Router } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { Simulator } from './pages/Simulator/index.js';
import { Skills } from './pages/Skills/index.js';
import { NotFound } from './pages/_404.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/sim" component={Simulator} />
					<Route path="/skills" component={Skills} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));

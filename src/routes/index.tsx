import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import { Route, Routes as Routesdom } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import BooksList from '../pages/BooksList';

export const Routes = () => (
	<Provider store={store}>
		<Header>
			<img alt='ByteBooks Logo' src='./logo.png' height={70} />
		</Header>
		<Routesdom>
			<Route path='/' element={<Catalog />}>
				<Route path='/book' element={<BooksList />} />
			</Route>
		</Routesdom>
		<Footer />
	</Provider>
);


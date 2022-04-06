
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
// import Filters from './components/Filters/Filters';
import Footer from './components/Footer/Footer';
import Banner from './components/Header/Banner/Banner';
import Header from './components/Header/Header';
import LaunchesHome from './components/LaunchesHome/LaunchesHome';
import Univerce from './components/Univerce/Univerce';
import rootReducer from './reducers/rootReducer';
const store = createStore(rootReducer);
function App() {
  return (
    <div className="App">
        <Provider store={store}>

        <Header/>
     <Banner></Banner>
     <Univerce></Univerce> 
     <LaunchesHome></LaunchesHome>
     <Footer></Footer>

        </Provider>
    
    </div>
  );
}

export default App;

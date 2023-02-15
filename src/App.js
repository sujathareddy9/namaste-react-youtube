
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils.js/store';


function App() {
  return (
    <Provider store={store}>
    <div>
     {/* <h1>Namaste React</h1> */}
     <Head />
     <Body />
</div>
</Provider>

  );
};
export default App;



// * Head
// * Body
// *  Sidebar
// *    MenuItems
// *  MainContainer
// *    ButtonsList
// *    VideoContainer
// *      VideoCard
// *

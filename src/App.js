
import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import awsconfig from './aws-exports';
import { 
  GamesDisplay,
  NavBar
} from './ui-components';
import { Routes, Route } from 'react-router-dom';
import CreateGame from './CreateGame.js';
import EditGame from './EditGame.js';
import { withAuthenticator } from '@aws-amplify/ui-react';


Amplify.configure(awsconfig);

class App extends Component {
  render() {
    return  (
    <div className="App">
          <Routes>
            <Route exact path='/' element={<div><NavBar/><GamesDisplay/></div>} />
            <Route exact path='/newgame' element={<CreateGame/>} />
            <Route exact path='/game/:gid' element={<EditGame/>} />
          </Routes>
        </div>
  );
}
}

export default withAuthenticator(App);

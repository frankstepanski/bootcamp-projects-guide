import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import NavBar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

//Screens
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
    const [sideToggle, setSideToggle] = useState(false);
    return (
        <Router>
            <NavBar click={() => setSideToggle(true)} />
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
            <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
            <main>
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route
                        exact
                        path='/product/:id'
                        component={ProductScreen}
                    />
                    <Route exact path='/cart' component={CartScreen} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;

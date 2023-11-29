import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Routes = () => {
    <BrowserRouter>
    <Switch>

        <Route path= "/" exact component={Main}/>
        <Route path= "/list-episodes" component={ListEpisodes}/>
        <Route path= "/watch" component={Watch}/>

    </Switch>

    </BrowserRouter>
}
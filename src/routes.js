import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import Main from './../src/pages/Main'
import ListEpisodes from './../src/pages/ListEpisodes'
import Watch from './../src/pages/Watch'
const MyRoutes = () => (
    <BrowserRouter>
    <Routes>

        <Route exact path= "/"  element={<Main/>}/>
        <Route exact path= "/list-episodes" element={<ListEpisodes/>}/>
        <Route exact path= "/watch" element={<Watch/>}/>

    </Routes>
    </BrowserRouter>
)
export default MyRoutes;
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './../src/pages/Main'
import ListEpisodes from './../src/pages/ListEpisodes'
import Watch from './../src/pages/Watch'
const MyRoutes = () => (
    <BrowserRouter>
    <Routes>

        <Route path= "/" exact element={<Main/>}/>
        <Route path= "/list-episodes" element={<ListEpisodes/>}/>
        <Route path= "/watch" element={<Watch/>}/>
    </Routes>

    </BrowserRouter>
)
export default MyRoutes;
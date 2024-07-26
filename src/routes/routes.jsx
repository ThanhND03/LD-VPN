import config from '../config/index'

import Home from "../pages/Home/Home";
import Account from "../pages/Account/Account";


const publicRouter = [
    { path: config.home, component: Home},
    { path: config.account, component: Account},
]

const priveRouter = [

]

export {publicRouter, priveRouter}
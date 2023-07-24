import {Link, Outlet} from 'react-router-dom'
import Classes from './mainNavigation.module.css'

const MainNavigations = ()=>{
    return(
      <div className={Classes.wrapper}>
        <div className={Classes.containor}>
            <h2 className={Classes.header}>Products</h2>
            <Link className={Classes.link} to='/Products'>Click here for more information</Link>
        </div>
        <div className={Classes.containor}>
            <h2 className={Classes.header}>call information</h2>
            <Link className={Classes.link} to='/Call'>Click here for entering the information</Link>
        </div>
        <Outlet />
      </div>
    )
}
export default MainNavigations;
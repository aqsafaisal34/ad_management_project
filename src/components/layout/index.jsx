import NavBar from "../navbar"
import Header from "../header"

const Layout = ({children}) => {
    return <>
        <NavBar/>
      {/*  */}
        <div>
            {children}
        </div>
    </>
}

export default Layout;
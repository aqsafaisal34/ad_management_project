import NavBar from "../navbar"
import Header from "../header"

const Layout = ({children}) => {
    return <>
        <NavBar/>
      {/*  */}
        <div style={{paddingTop: "30px", padding:"20px"}}>
            {children}
        </div>
    </>
}

export default Layout
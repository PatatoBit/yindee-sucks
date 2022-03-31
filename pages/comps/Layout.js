import Footer from "./Footer";
import Navbar from "./Navbar";
import Cherry from '../../public/images/Cherry.jpg'


const Layout = ({ children }) => {
    return ( 
        <div className="content" style={{ backgroundImage: `url(${Cherry})`}}>
            <Navbar/>
            { children }
            <Footer />
        </div>
     );
}
 
export default Layout;
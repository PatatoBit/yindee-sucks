import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( <nav>
        <div className="logo">
            <h1>Yindee sucks</h1>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
    </nav> );
}
 
export default Navbar;
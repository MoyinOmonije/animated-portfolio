import Sidebar from "../sidebar/sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* SIDE BAR */}
            <Sidebar/>
            <div className="wrapper">
                <span><motion.img initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} className="logo" src="/logo.png" alt=""/></span>
                <div className="social">
                    <a href=""><img src="/linkedin.png" alt=""/></a>
                    <a href=""><img src="/github-mark-white.png" alt=""/></a>
                    <a href=""><img src="/cvicon.png" alt=""/></a>
                </div>
            </div>
        </div>

    )
}

export default Navbar
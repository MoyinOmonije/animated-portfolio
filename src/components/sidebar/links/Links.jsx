import { motion } from "framer-motion";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.2,
            stiffness: 20,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
            stiffness: 20,
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Links = () => {
    const items = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
        "About"
    ];



    return <motion.div className="links" variants={variants}>
        {items.map(item => (
            <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
                {item}
            </motion.a>
        ))} {/*For the items in the list: homepage e.t.c list them in the sidebar as links*/}
    </motion.div>
}

export default Links
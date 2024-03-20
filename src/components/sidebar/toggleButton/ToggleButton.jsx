import { motion } from "framer-motion"


const ToggleButton = ({ setOpen }) => {
    return (
        <button onClick={() => setOpen((prev) => !prev)}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <motion.path strokeWidth="3" stroke="black" strokeLinecap="round"
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" }, //SVG NOTATIONS FOR SHAPE AND GRADIENT (SLOPE) OF THE LINE WHEN OPEN AND CLOSED
                        open: { d: "M 3 16.5 L 17 2.5" }, //SVG NOTATIONS FOR SHAPE AND GRADIENT (SLOPE) OF THE LINE WHEN OPEN AND CLOSED
                    }} 
                />
                <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" d="M 2 9.423 L 20 9.423" variants={{
                        closed: { opacity: 1 }, //SVG NOTATIONS FOR SHAPE AND GRADIENT (SLOPE) OF THE LINE WHEN OPEN AND CLOSED
                        open: {opacity: 0}, //SVG NOTATIONS FOR SHAPE AND GRADIENT (SLOPE) OF THE LINE WHEN OPEN AND CLOSED
                    }} />
                <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" }, //SVG NOTATIONS FOR SHAPE AND GRADIENT (SLOPE) OF THE LINE WHEN OPEN AND CLOSED
                        open: { d: "M 3 2.5 L 17 16.346" }, //SVG NOTATIONS FOR SHAPE AND GRADIENT (SLOPE) OF THE LINE WHEN OPEN AND CLOSED
                    }} />
            </svg>
        </button>
    );
};

export default ToggleButton;
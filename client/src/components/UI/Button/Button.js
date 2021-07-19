import styles from "./Button.module.scss";

const Button = ({ children, handleClick, isActive }) => {
    return (
        <button onClick={handleClick} className={`${styles.button} ${isActive && styles.active}`}>
            {children}
        </button>
    );
};

export default Button;

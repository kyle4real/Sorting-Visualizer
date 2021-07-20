import styles from "./Button.module.scss";

const Button = ({ children, handleClick, isActive, className }) => {
    return (
        <button
            onClick={handleClick}
            className={`${className && styles[className]} ${styles.button} ${
                isActive && styles.active
            }`}
        >
            {children}
        </button>
    );
};

export default Button;

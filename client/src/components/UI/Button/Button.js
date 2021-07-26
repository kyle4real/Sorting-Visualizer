import styles from "./Button.module.scss";

const Button = ({ children, handleClick, isActive, className, disabled }) => {
    return (
        <button
            onClick={handleClick}
            className={`${className && styles[className]} ${styles.button} ${
                isActive && styles.active
            }`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;

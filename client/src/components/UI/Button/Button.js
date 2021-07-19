import styles from "./Button.module.scss";

const Button = ({ children, handleClick }) => {
    return (
        <button onClick={handleClick} className={styles.button}>
            {children}
        </button>
    );
};

export default Button;

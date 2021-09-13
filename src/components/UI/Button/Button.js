import classes from "./Button.module.scss";

const Button = ({ children, onClick, isActive, className, disabled }) => {
    return (
        <button
            onClick={onClick}
            className={`${className && classes[className]} ${classes.button} ${
                isActive && classes.active
            }`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;

import classes from "./Button.module.scss";

const Button = ({ children, handleClick, isActive, className, disabled }) => {
    return (
        <button
            onClick={handleClick}
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

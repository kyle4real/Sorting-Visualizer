import styled from "styled-components";

const Button = styled.button`
    padding: 0.5rem 1.5rem;
    font: inherit;
    background: #1dc690;
    border: 1px solid #1dc690;
    border-radius: 4px;
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: background 0.3s ease;
    color: #eaeae0;

    &:hover,
    &:active {
        background: rgba(29, 198, 144, 0.7);
    }
`;

export default Button;

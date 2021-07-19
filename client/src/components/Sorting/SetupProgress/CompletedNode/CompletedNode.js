import React, { useState } from "react";
import styles from "./CompletedNode.module.scss";

const CompletedNode = () => {
    const [full, setFull] = useState(false);

    const handleClick = () => {
        setFull(!full);
    };

    return (
        <>
            <div className={`${styles["completed-node"]} ${full && styles.full}`}></div>
            <button onClick={handleClick}>n</button>
        </>
    );
};

export default CompletedNode;

import React from "react";
import styles from "./CompletedNode.module.scss";

const CompletedNode = ({ full, mid }) => {
    return (
        <>
            <div
                className={`${styles["completed-node"]} ${mid && styles.mid} ${
                    full && styles.full
                }`}
            ></div>
        </>
    );
};

export default CompletedNode;

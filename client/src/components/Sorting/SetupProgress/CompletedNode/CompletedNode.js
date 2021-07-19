import React, { useState } from "react";
import styles from "./CompletedNode.module.scss";

const CompletedNode = ({ full }) => {
    return (
        <>
            <div className={`${styles["completed-node"]} ${full && styles.full}`}></div>
        </>
    );
};

export default CompletedNode;

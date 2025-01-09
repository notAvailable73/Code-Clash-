import React from "react";
const getColor = (percentage) => {
    if (percentage < 50) {
        return "#ff0000"; // Red
    } else if (percentage < 75) {
        return "#ffa500"; // Orange
    } else {
        return "#28a745"; // Green
    }
};
const CircularProgressBar = ({ total, completed }) => {
    const percentage = 100 * completed/total;
    const radius = 45;  
    const strokeWidth = 10; 
    const circumference = 2 * Math.PI * radius;   
    const offset = circumference - (percentage / 100) * circumference; 

    return (
        <div style={{ width: "120px", height: "120px", position: "relative" }}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="none"
                    stroke="#e6e6e6"
                    strokeWidth={strokeWidth}
                />
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="none"
                    stroke={getColor(percentage)}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{
                        transition: "stroke-dashoffset 0.5s ease",
                    }}
                />
            </svg>
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333",
                }}
            >
                <div>{`${completed}/${total}`}</div> 
            </div>
        </div>
    );
};

export default CircularProgressBar;

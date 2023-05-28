import React from 'react';

const Navbar = ({ onIndexChange }) => {
    return (
        <header>
            <ul
                style={{
                    backgroundColor: "bisque",
                    display: "flex",
                    alignItems: "center",
                    height: "30px",
                    gap: "20px",
                    listStyle: "none",
                    cursor: "pointer",
                }}
            >
                <li onClick={() => onIndexChange(0)}>Dashboard</li>
                <li onClick={() => onIndexChange(1)}>Todolist</li>
            </ul>
        </header>
    );
}

export default Navbar;
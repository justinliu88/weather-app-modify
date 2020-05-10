import React from "react";

function Navigation(props) {
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            props.handleSearch();
        }
    };

    return (
        <nav>
            <div>
                <input
                    className="search-input"
                    onChange={props.handleInputChange}
                    onKeyPress={handleKeyPress}
                    value={props.input}
                />
                <button className="search-btn" onClick={props.handleSearch}>
                    <i className="fa fa-search" />
                </button>
                <button className="temp-switch">
                    <i
                        className="fa fa-thermometer-empty temp-switch__icon"
                        aria-hidden="true"
                    />
                    <sup>&deg;</sup>C
                </button>
            </div>
        </nav>
    );
}

export default Navigation;

import React, { useState } from "react";
import './card.css';
import { useNavigate } from "react-router-dom";

const Card = ({ name, status, pictureUrl, CorrectPin }) => {
    const [isPinVisible, setIsPinVisible] = useState(false);
    const [pin, setPin] = useState("");
    const navigate = useNavigate();

    const handleCardClick = () => {
        setIsPinVisible(true); // Show the PIN input when the card is clicked
    };

    const handlePinChange = (e) => {
        const numericValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        setPin(numericValue); // Update the PIN value
    };

    const handlePinSubmit = (e) => {
        e.preventDefault();
        if (pin === "1234") { // Replace "1234" with your actual PIN logic
            alert("PIN correct!");
            setIsPinVisible(false);
            navigate('/adminDashboard')
        } else {
            alert("Incorrect PIN!");
        }
    };

    return (
        <div className="card" onClick={handleCardClick}>
            <div className="center-card">
                <img src={pictureUrl} alt="" />
            </div>
            <div className="center-card">
                <h2>{name}</h2>
            </div>
            <div className="center-card">
                <p>{status}</p>
            </div>
            {isPinVisible && (
                <div className="pin-container">
                    <form onSubmit={handlePinSubmit}>
                        <input
                            type="password"
                            value={pin}
                            onChange={handlePinChange}
                            placeholder="Enter PIN"
                            inputMode="numeric"
                            pattern="\d*"
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Card;

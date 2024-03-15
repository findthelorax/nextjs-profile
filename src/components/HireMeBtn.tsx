import React, { useState } from 'react';

const HireMeButton: React.FC = () => {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
    };

    const handleFormClose = () => {
        setShowForm(false);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Hire Me</button>
            {showForm && (
                <div>
                    <button onClick={handleFormClose}>Close</button>
                    <form>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )}
        </div>
    );
};

export default HireMeButton;
import Button from "./button";

const Card = ({ title, description, icon, buttonText, className }) => {
    const isReadMoreButton = buttonText === "Read More"; // Check if the button text is "Read More"

    return (
        <div className={`shadow-white shadow py-2 border-2  rounded-lg border-white flex flex-col justify-center items-center h-full ${className}`} 
            style={{
                backgroundColor: 'rgba(169,169,169,0.3)'
            }} 
        >
            {/* Card Content */}
            <div className="text-center">
                <div className="flex items-center justify-center mb-2 ">
                    <i className={icon}></i> {/* Render the icon */}
                    <h3 className={isReadMoreButton ? 
                        `text-xl ml-2 font-semibold bg-white bg-clip-text text-transparent` : 
                        `text-2xl ml-2 mb-2 font-bold bg-purple-600 bg-clip-text text-white`}>
                        {title}
                    </h3>
                </div>
                <p className={isReadMoreButton ? 
                    `bg-clip-text text-white font-semibold` : 
                    `bg-clip-text text-white font-semibold`}>
                    {description}
                </p>
            </div>

            {/* Centered Button */}
            {buttonText && (
                <div className="flex justify-center mt-4">
                    <Button 
                        className={isReadMoreButton ? 
                            "bg-gradient-to-l from-black to-orange-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 text-2xl" : 
                            "bg-gradient-to-r from-cyan-100 to-cyan-900 text-white py-2 px-4 rounded-full hover:bg-blue-600 text-2xl"} 
                        text={buttonText} 
                    />
                </div>
            )}
        </div>
    );
};

export default Card;
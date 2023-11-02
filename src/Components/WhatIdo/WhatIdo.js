import React from 'react';
import "./WhatIdo.css";
import WhatIdocard from './WhatIdocard';


const Mydata = [

    {
        id: 1,
        Description: "Prepare variety of different designs, layouts and websites",
    },
    {
        id: 2,
        Description: "Convert graphic designs to usable web images using React JS",
    },
    {
        id: 3,
        Description: "Code websites using HTML, CSS, JavaScript and jQuery languages",
    },
    {
        id: 4,
        Description: "Conduct Unit testing over course of web development lifecycle",
    },

    {
        id: 5,
        Description: "Multi-task across multiple functions and roles to generate project results and meet deadlines and organizational expectations",

    },
    {
        id: 6,
        Description: "Convert Figma and PhotoShop Designs into responsive Web Pages",
    },
]
const WhatIdo = () => {
    
    return (
        <>

            <div className="whatido-container common-width" id="whatido-id">

               
                    <h2 className="whatido-title">What I do ?👩‍💻</h2>
                    
                <div className="whatido-main-content">
                    <WhatIdocard list={Mydata} />
                </div>
            </div>
        </>
    )
}

export default WhatIdo;
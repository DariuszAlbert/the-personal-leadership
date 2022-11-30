import React from "react";
import {Donut, Circle} from 'react-awesome-shapes';


const Shapes = () => {
    return (
        <div className=' fixed top-0 w-full  ' >
       <Circle
                 color="linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%)"
                 size={['480px', '700px', '800px', '1000px']}
                 
                 position="absolute"
                 
                 top={['-150px','-200px','-225px','-300px' ]}
                 right={['-150px','-200px','-225px','-225px' ]}
                
                 
         />
                   <Donut
                         color="#f43f5e"
                         size={['18400px', '18700px', '17000px', '17000px']}
                         position="absolute"
                           bottom={['-9000px','-9250px','-8000px','-8000px' ]}
                           left={['-90px','-78px','-75px','-60px' ]}
                         width={['170px']}
                        
                         
                     />
       </div>
    )
};

export default Shapes;

       
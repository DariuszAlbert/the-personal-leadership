import React from "react";
import {Donut, Circle, SquareDonut} from 'react-awesome-shapes';


const Shapes = () => {
    return (
        <div className=' fixed top-0 w-full   ' >
           <div className="max-w-[1000px] overflow-hidden">
          <Circle
                    color="linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%)"
                    size={['480px', '660px', '770px', '1000px']}
                    
                    position="absolute"
                    
                    top={['-150px','-200px','-225px','-300px' ]}
                    right={['-150px','-200px','-225px','-225px' ]}
                      
                    
            />
            </div>
                  
                  <div className="flex opacity-95 z-0 max-w-[1000px]">
                      <Donut
                            color="#f43f5e"
                            size={['18400px', '18700px', '17000px', '17000px']}
                            position="absolute"
                              bottom={['-9170px','-9250px','-8400px','-8000px' ]}
                              left={['-83px','-78px','-78px','-70px' ]}
                            width={['170px']}
                            
                            
                            
                        />
                  </div>

                  <div className="flex opacity-10 z-0 max-w-[1000px] rotate-12     ">
                      <SquareDonut
                            color="#f43f5e"
                            size={['300px', '300px', '300px', '300px']}
                            position="absolute"
                              top={['260px','260px','260px','260px' ]}
                              left={['200px','350px','410px','770px' ]}
                           
                            
                            
                            
                        />
                  </div>
       </div>
    )
};

export default Shapes;

       
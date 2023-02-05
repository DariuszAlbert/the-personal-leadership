import React from 'react';
import styles from './style';
import { CTA, FAQ, Footer, Navbar,Player,  Shapes, Testimonials, WhatGives, WhatIs} from './components';
import { scrollPositionTracker } from './hooks/scrollPositionTracker';
import ReactPlayer from "react-player/youtube";




const App = () => {
  const scrollPosition = scrollPositionTracker();

  return ( 
    <div  className='bg-color w-full overflow-hidden '>
      <div className={ scrollPosition > 0 ? `${styles.navBehaviourAfter} ${styles.paddingX}    ` : ` ${styles.navBehaviourBefore} ${styles.paddingX} `} >
        <div className={` ${styles.flexCenter}  `}>
            <Navbar />
            {/* <div className='flex overflow-hidden'>
            <Circle
                    color="linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%)"
                    size={['480px', '660px', '770px', '1000px']}
                    
                    position="absolute"
                    
                    top={['-150px','-200px','-225px','-300px' ]}
                    right={['-150px','-200px','-225px','-225px' ]}
                      
                    
            />
            </div> */}
        </div> 
      </div>
      <div className={` ${styles.paddingX}  relative top-0 w-full z-10`} >
        <div className={` ${styles.flexCenter}  `}>
            <Shapes />
        </div> 
      </div> 
      
      <div id="home"  className={` bg-color ${styles.paddingX} ${styles.flexStart} relative  `}>
        <div className={`mt-40 ${styles.boxWidth}`}>
            <WhatIs />    
        </div>
      </div>
      
      <div  className={` flex-center bg-color ${styles.paddingX} ${styles.flexStart} relative `}>
        <div className={`${styles.boxWidth} `}>
            <WhatGives />
            <Testimonials />
            <FAQ />
            <Player />
            <CTA  />
            <Footer />
        </div>
      </div>
    </div>
    
  )
};



export default App;
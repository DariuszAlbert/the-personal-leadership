import React from 'react';
import styles from './style';
import { CTA, FAQ, Footer, Navbar,Shapes, Testimonials, WhatGives, WhatIs} from './components';
import { scrollPositionTracker } from './hooks/scrollPositionTracker';


const App = () => {
  const scrollPosition = scrollPositionTracker();

  return (

    
    <div  className='bg-color w-full overflow-hidden '>
        
        

      <div className={ scrollPosition > 0 ? `${styles.navBehaviour} ${styles.paddingX}  bg-color ` : ` ${styles.navBehaviour} ${styles.paddingX} `} >
        <div className={` ${styles.flexCenter}  `}>
            <Navbar />
            {/* <Shapes /> */}
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
      
      <div  className={` bg-color ${styles.paddingX} ${styles.flexStart} relative `}>
        <div className={`${styles.boxWidth} `}>
            <WhatGives />
            <Testimonials />
            <FAQ />
            <CTA  />
            <Footer />
      
 

        </div>
      </div>
    </div>
    
  )
};



export default App;
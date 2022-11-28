import React from 'react'
import styles from './style'
import {Business, CTA, Footer, Core, Navbar, FAQ, Testimonials} from './components'
import { scrollPositionTracker } from './hooks/scrollPositionTracker';

const App = () => {
  const scrollPosition = scrollPositionTracker();

  return (
    <div  className='bg-color w-full overflow-hidden '>
     
      <div className={ scrollPosition > 0 ? `${styles.navBehaviour} ${styles.paddingX}  bg-color ` : ` ${styles.navBehaviour} ${styles.paddingX} `} >
        <div className={` ${styles.flexCenter}`}>
            <Navbar />
        </div>
        
      </div>
      
      <div id="home" className={`${styles.flexStart}`}>
        <div className={`mt-40 ${styles.boxWidth}`}>
            <Core />
        </div>
      </div>
      
      <div  className={` bg-color ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            {/* <Stats /> */}
            <Business />
            <Testimonials />
            <FAQ />
            <CTA />
            <Footer />

        </div>
      </div>


    </div>
  )
};

export default App;
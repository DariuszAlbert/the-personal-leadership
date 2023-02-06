import React from "react";
import styles from '../style';
import ReactPlayer from "react-player/youtube";

const Player = () => {
    const width = '';
    const height = '';


    return ( 
        <section id='player' className={` ${styles.flexCenter} flex-col relative z-20 mt-4 `}>
            <div className="visible sm:hidden " >
                <ReactPlayer className="visible sm:invisible " url='https://youtu.be/xIPS7QhdQlY' width={340} height={240}/>
            </div>
            
            <div className="hidden sm:block " >
                <ReactPlayer url='https://youtu.be/xIPS7QhdQlY' />
            </div>
    </section>
    );
}

export default Player;

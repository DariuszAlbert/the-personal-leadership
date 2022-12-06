// xs: "480px",
// ss: "620px",
// sm: "768px",
// md: "1060px",
// lg: "1200px",
// xl: "1700px",

const styles = {
    boxWidth: "xl:max-w-[1280px] lg:max-w-[1060px] w-full",
  
    heading2: "font-poppins font-semibold xl:text-[48px] xs:text-[38px] text-[30px] text-white xl:leading-[66px] xs:leading-[56px] leading-[50px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] sm:leading-[30.8px] leading-[25px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
 
    navBehaviourAfter: "transition-all transform ease-in-out delay-400 duration-1000 fixed top-0 w-full z-30 bg-navbar    ",
    navBehaviourBefore: "transition-all transform ease-in-out delay-400 duration-1000 fixed top-0 w-full z-30  ",

    navLogoBehaviour: "ss:text-[] leading-[5px]"

  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };

  
  export default styles;
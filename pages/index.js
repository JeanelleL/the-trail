import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Text, Image, ThemeProvider, Grid } from 'theme-ui'
import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [openDropDowns, setOpenDropDowns] = useState([]);

  const handleDrop = (item) => {
    if (openDropDowns.includes(item)) {
      setOpenDropDowns(openDropDowns.filter(dropDown => dropDown !== item));
    } else {
      setOpenDropDowns([...openDropDowns, item]);
    }
  };

  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isHovered) {
      intervalId = setInterval(() => {
        setRotation(prevRotation => prevRotation + 10); // Change 5 to adjust the rotation speed
      }, 200); // Change 100 to adjust the interval duration
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Head>
        <title>The Trail</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main style={{backgroundColor: "#FFF5D8", height: "500vh"}}>
        
      <div style={{position: "absolute", zIndex: 5}}>

        <img style={{position: "absolute", zIndex: 0, width: "100vw", minHeight: 208, objectFit: "cover"}} src="./TopSky.svg"/>
        <div style={{height: 116, flexDirection: "column", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: 96}}>
          <div style={{width: "100vw", height: 16, backgroundColor: "#032412"}}></div>
          <div style={{width: "100vw", height: 8, marginTop: 8, backgroundColor: "#032412"}}></div>
          <div style={{width: "100vw", height: 4, marginTop: 4, backgroundColor: "#032412"}}></div>
          <div style={{width: "100vw", height: 2, marginTop: 2, backgroundColor: "#032412"}}></div>
          <div style={{width: "100vw", height: 1, marginTop: 1, backgroundColor: "#032412"}}></div>

        </div>
        <div style={{height: 116, width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: 96}}>
          <img style={{height: 116}} src="./Intergalatic.svg"/>
        </div>
        <div>
        <Box sx={{paddingTop: [196, 242, 242], zIndex: 2, position: "relative"}}>
        <Image sx={{position: "absolute", objectFit: "fit", width: ["0px", "0px", "400px", "450px"], left: "calc(50% - 225px)"}} src="TheTrailType.svg"/>

<div style={{display: "flex", alignItems: "center", width: '100vw', justifyContent:"center"}}>
        <Grid columns={["1fr", "1fr", "1fr", "1fr 1fr"]} sx={{justifyContent: "space-between", backgroundColor: "#FFF5D8", width: 970, aspectRatio: ['1/2', '1/2', '1/2', '2'], overflow: "hidden", border: '8px solid #032412'}}>
  <Box sx={{height: "calc(100% - 96px)", margin: 0, boxSizing: 'content-box', display: "flex", padding: [24, 24, 32], flexDirection: "column", justifyContent: "space-between", width: "calc(100% - 64px)"}}>
    <p style={{fontSize: 16, fontWeight: 300}}>PACIFIC CREST TRAIL, 2024</p>
    <div>
    <p style={{fontSize: 24, lineHeight: 2}}>Hey there,</p>
    <p style={{marginTop: 24, fontSize: 24, lineHeight: 1.5}}>
      You’re invited on a 7 day hike along the Pacific Crest Trail and a 4 week hiking equipment building event with 30 Hack Clubbers  
    </p>

    <Text sx={{fontSize: [22, 24], lineHeight: [2, 1.5], marginTop:  24}}>

    <i style={{fontSize: 42,letterSpacing: "1.5px", lineHeight: 1}} class="strange">Save the date:</i><br/>
    Hack & Hike: July 12 - July 19
    </Text>
    </div>
    <div style={{display: "flex"}}>
    <div style={{marginTop: 16, alignItems: "center", display: "flex", justifyContent: "center"}}>
    <button style={{position: "absolute", fontSize: 24, fontFamily: "Fraunces", borderRadius: 0, backgroundColor: "#032412", border: "2px solid #FFF5D8", outline:"none", color:"#FFF5D8", padding: "16px 24px"}}>Hop Onboard</button>

    <button style={{fontSize: 24, fontFamily: "Fraunces", borderRadius: 0, backgroundColor: "#032412", border: "4px solid #032412", outline:"none", color:"#FFF5D8", padding: "16px 24px"}}>Hop Onboard</button>
    </div>
    </div>
  </Box>
  <div style={{width: "100%", position:"relative", flexDirection: "column", height: "100%", display: "flex", justifyContent: "space-between"}}>

  <Draggable style={{zIndex: 5, position: "absolute"}}>
  <img style={{position: "absolute", 
  
  
  userDrag: 'none',  // Prevent image dragging
  userSelect: 'none',
  MozUserSelect: 'none',
  WebkitUserDrag: 'none',
  WebkitUserSelect: 'none',

  cursor:"grab",
  msUserSelect: 'none', width: 120, height: 120, right: 16, top:16}} src="TakeStamp.svg"/>
</Draggable>


  <img 
  
  onMouseEnter={handleHover}
  onMouseLeave={handleMouseLeave}
  
  style={{position: "absolute",
  
  transform: `rotate(${rotation}deg)`,
  width: 86, height: 86, right: 16, zIndex: 2, top:164, cursor: "wait"}} src="beginnersWelcome.svg"/>

    <p></p>
    <div style={{objectFit: "fit", overflow: "hidden", width: "100%", position: "relative"}}>

    <img style={{objectFit: "fit", overflow: "hidden", width: "100%"}} src="./rightHalf.svg"/>

      </div>

  </div>
</Grid>

</div>
        </Box>
        <Box style={{zIndex: 100, flexDirection: "column", gap: 32, display: 'flex', alignItems: "center",  justifyContent: "center", position: "relative", paddingTop: 32}}>
          <Box style={{width: 970, backgroundColor: "#FFF5D8", border: "8px solid #032412"}}>
          <h1 style={{margin: 0, letterSpacing: 1.06, color: "#032412", fontSize: 64, paddingLeft: 32, paddingTop: 32, paddingBottom: 32}}>
          <i>Pack your bag with PCBs</i>
            </h1>

          <div style={{backgroundColor: "#032412", widht: "100%", height: "4px"}}>
          </div>

        <div style={{display: "flex", fontSize: 24, lineHeight: 1.5, padding: 32, flexDirection: 'column',}}>
          <p>
          Build a piece of electronic trail equipment (i.e. Flash Lights, Stoves, GPS Compasses, Radios, Head Lamps, Trail Game Consoles, NFC Trail Board Games, Vintage Trail Cameras, etc) with your friends to make this adventure possible.
          </p>

          <p>You can build whatever you’d like, here are some challenges you may solve for:
            <br/><b>How are we going to...</b>
          </p>

          <ul>
            <li>
            communicate long distances
            </li>
            <li>
            navigate the trail
            </li>
            <li>
            plan according to the weather
            </li>
            <li>
            save orpheus
            </li>
            <li>
            see in the dark
            </li>
            <li>
            entertain each other on the trail
            </li>
            <li>
            communicate with birds
            </li>
            <li>
            capture memories of the trip
            </li>
            <li>
            cook our food
            </li>
          </ul>

          <p><b>You ship trail equipment, and we will ship you to the Pacific Crest Trail. The piece of equipment you make will be manufactured to supply our entire group.</b></p>
          
        </div>
          </Box>

          <Box style={{width: 970, backgroundColor: "#FFF5D8", border: "8px solid #032412"}}>
          <h1 style={{margin: 0, letterSpacing: 1.06, color: "#032412", fontSize: 64, paddingLeft: 32, paddingTop: 32, paddingBottom: 32}}>
          <i>Our Journey</i>
            </h1>

          <div style={{backgroundColor: "#032412", widht: "100%", height: "4px"}}>
          </div>

        <div style={{flexDirection: "row", display: "flex", fontSize: 24, lineHeight: 1.5, padding: 0, justifyContent: "space-between"}}>
          <div style={{width: "100%"}}>
          
          <div style={{padding: 24, borderBottom: "4px solid #032412", borderRight: "2px solid #032412"}}>
          <p style={{fontSize: 32}}>
          first “four” weeks <i style={{fontSize: 16, marginLeft: 8}}>(Jun 1st - Jul 7th)</i>     
          </p>
          </div>
          <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, borderRight: "2px solid #032412", borderBottom: "4px solid #032412"}}>

          <div onClick={() => handleDrop("weekZero")} style={{cursor: "pointer", display: "flex", height: 36, alignItems: 'center', justifyContent: "space-between"}}>
          <p>0. Come up with an idea</p>
          <img style={{transition: "transform 0.001s linear", transform: `rotate(${openDropDowns.includes("weekZero") ? (180) : (0)}deg)`}}src="TheDrop.svg"/>
          </div>

          {openDropDowns.includes("weekZero") && (
          
          <div style={{display: "flex", flexDirection: "column"}}>
            <p style={{fontSize:20}}>Sign up and then PR your piece of trail equipment idea to our <a style={{color: "#032412"}} href="https://github.com/hackclub/trail">Trail GitHub Repo</a>.</p>
            <img style={{display: "flex", width: "100%"}} src="EquipmentSVG.svg"/>
          </div>)}
          </div>
          <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, borderRight: "2px solid #032412", borderBottom: "4px solid #032412"}}>

          <div onClick={() => handleDrop("weekOne")} style={{cursor: "pointer", display: "flex", height: 36, alignItems: 'center', justifyContent: "space-between"}}>
          <p>1. Parts & Schematic</p>
          <img style={{transition: "transform 0.001s linear", transform: `rotate(${openDropDowns.includes("weekOne") ? (180) : (0)}deg)`}}src="TheDrop.svg"/>
          </div>

          {openDropDowns.includes("weekOne") && (
          
          <div style={{display: "flex", flexDirection: "column"}}>
            <p style={{fontSize:20}}>Sign up and then PR your piece of trail equipment idea to our <a style={{color: "#032412"}} href="https://github.com/hackclub/trail">Trail GitHub Repo</a>.</p>
            <img style={{display: "flex", width: "100%"}} src="PickParts.svg"/>
          </div>)}
          </div>
          <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, borderBottom: "4px solid #032412", borderRight: "2px solid #032412"}}>
          <p>2. Wire Up PCB & Order</p>
          </div>
          <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, borderBottom: "4px solid #032412", borderRight: "2px solid #032412"}}>

          <p>3. Make A Case</p>
          </div>
          <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, borderRight: "2px solid #032412", borderBottom: "4px solid #032412"}}>
          <p>4. Assemble</p>
          </div>
          
          </div>
          <div style={{width: "100%"}}>
          <div style={{padding: 24, borderBottom: "4px solid #032412", borderLeft: "2px solid #032412"}}>
          <p style={{fontSize: 32}}>
          week on the trail: <i style={{fontSize: 16, marginLeft: 8}}>(Jul 12 - Jul 19)</i>     
          </p>
          </div>

          <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, borderLeft: "2px solid #032412", borderBottom: "4px solid #032412"}}>

          <div onClick={() => handleDrop("dayOne")} style={{cursor: "pointer", display: "flex", height: 36, alignItems: 'center', justifyContent: "space-between"}}>
          <p>Day One -</p>
          <img style={{transition: "transform 0.001s linear", transform: `rotate(${openDropDowns.includes("dayOne") ? (180) : (0)}deg)`}}src="TheDrop.svg"/>
          </div>

          {openDropDowns.includes("dayOne") && (<p>Yo</p>)}
          </div>
          <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, borderLeft: "2px solid #032412", borderBottom: "4px solid #032412"}}>

          <p>Day Two - </p>
          </div>
          <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, borderLeft: "2px solid #032412", borderBottom: "4px solid #032412"}}>
          <p>Day Three -</p>
          </div>
          <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, borderLeft: "2px solid #032412", borderBottom: "4px solid #032412"}}>

          <p>Day Four -</p>
          </div>
          <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, borderLeft: "2px solid #032412", borderBottom: "4px solid #032412"}}>

          <p>Day Five -</p>
          </div>

          <div style={{paddingLeft: 24, paddingRight: 24,  marginLeft: "-2px", paddingTop: 16, paddingBottom: 16, borderLeft: "4px solid #032412", borderBottom: "4px solid #032412"}}>
          <p>Day Six -</p>
          </div>

          <div style={{paddingLeft: 24, paddingRight: 24, marginLeft: "-2px", paddingTop: 16, paddingBottom: 16, borderLeft: "4px solid #032412", borderBottom: "0px solid #032412"}}>
          <p>Day Seven -</p>
          </div>
          </div>


        </div>
          </Box>

        </Box>
      </div>

        {/* <p>Hello World!</p> */}
        </div>
        <img style={{zIndex: 0, width: "100vw", marginTop: "256px"}} src="./coolBG.svg"/>

      </main>
    </>
  );
}
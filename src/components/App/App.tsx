import React, { useEffect, useRef, useState } from 'react';

import gsap, {Expo} from 'gsap';
import { CustomEase } from "gsap/CustomEase";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { CSSPlugin } from "gsap/CSSPlugin";

// importing of style sheet
import './app.scss';

// importing of assets
import mule from '../../assets/images/mule.png'
import mule2 from '../../assets/images/mule2.jpg'
import check from '../../assets/svg/circle-check.svg'
import location from '../../assets/svg/location.svg'

// registers the gsap custom plugin
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(CSSRulePlugin)
gsap.registerPlugin(CSSPlugin)

const App = () => {
    const mainAppAnim = useRef<HTMLDivElement>({} as HTMLDivElement)
    const h1Anim = useRef<HTMLDivElement>({} as HTMLDivElement)
    const img1ref = useRef<HTMLImageElement>({} as HTMLImageElement)
    const [showBottomSection, setShowBottomSection] = useState<boolean | undefined>()
    const tL = useRef<GSAPTimeline | undefined>(); // timeLine 1 for the first section
    const tL2 = useRef<GSAPTimeline>(null!); // timeLine 2 for the second section

    //* NOTE: Every element with the class of '.PsTop' will have this reveal effect, the .PsTop class as an :after styling that covers the element with dark/gray background 

    // runs just once
    useEffect(() => {
        // prevents flashes when the page loads
        gsap.fromTo(mainAppAnim.current, {opacity:0}, {opacity: 1, duration: 0})

        // creates the gsap timeline
        tL.current = gsap.timeline({defaults:{duration:1, 'ease':Expo.easeInOut}});

        // grabs the before & after pseudo element
        const r1bBefore:CSSRule = CSSRulePlugin.getRule(".PsTop::before")
        const r1After:CSSRule = CSSRulePlugin.getRule(".PsTop::after")

        // kicks off the time-line animation
        tL.current
            .fromTo(r1After, {cssRule: {scaleX: 0, transformOrigin: 'left'}}, {cssRule: {scaleX: 1, transformOrigin: 'left'}}) // ::after enters the scene from the left, covers the content
            .to(r1After, {cssRule: {scaleX: 0, transformOrigin: 'right'}}) //::after reveals the content, and leaves the scene from the right
            .to(r1bBefore, {cssRule: {scaleX: 0, transformOrigin: 'top'}, duration:0, delay: -1}) // this ::before is already there onPage load, the background color is same with the page, it is covering the content on page load, so when the ::after is leaving, it leaves to
            .to(img1ref.current, {scale: 1, transformOrigin: 'center', delay: -.5, 'ease':Expo.easeOut}) // creates the zoom out effect of the image in the top section

        // the animation for the bottom section, but this animation will not be played immediately.. Only played when it is called to action
        const z1bBefore = CSSRulePlugin.getRule(".PsBottom::before")
        const z1After = CSSRulePlugin.getRule(".PsBottom::after")
        tL2.current = gsap.timeline({defaults:{duration:1, 'ease':Expo.easeInOut}})
            .to('.BottomGuy', {y:0, duration: 2})
            .fromTo('.AnimT1', {y: '150px', opacity:0}, {y:0, opacity:1, duration: 2, stagger:.5}, '-=1.7') // notice here am doing '-=1.7', this can also be done with a delay:-1.7, but the delay will work when using .to, if used for .fromTo, it will not work properly
            .fromTo(z1After, {cssRule: {scaleX: 0, transformOrigin: 'left'}}, {cssRule: {scaleX: 1, transformOrigin: 'left'}}, '-=1.5')
            .to(z1After, {cssRule: {scaleX: 0, transformOrigin: 'right'}})
            .to(z1bBefore, {cssRule: {scaleX: 0, transformOrigin: 'top'}, duration:0, delay: -1})
            .to('.btm_img', {scale: 1, transformOrigin: 'center', 'ease':Expo.easeOut}, '-=.5')
        tL2.current.pause() // Paused!!!
    }, [])


    // for animating the bottom section to the top and back to the bottom
    useEffect(() => {
            if (showBottomSection === true) {
                tL2.current.play()
            } else if (showBottomSection === false) {
                tL2.current.reverse()
            }
    }, [showBottomSection])

    return (
        <div className="AppMain" ref={mainAppAnim}>
            <div className="TopGuy">                
                <div className="TopGuy__header">
                    <div className="stickHd PsTop" ref={h1Anim}>StickerMule</div>
                    <div className="SvgAndOthers PsTop">
                        <div className=""><img src={check} alt=""/></div>
                        <div className="">Home of stickers</div>
                    </div>
                </div>
                <div className="TopGuy__midImg PsTop">
                    <img src={mule} alt="" ref={img1ref} onClick={() => { setShowBottomSection(true) }} />
                </div>
                <div className="TopGuy__lastMen">
                    <div className="SvgAndOthers PsTop">
                        <div className=""><img src={location} alt="" /></div>
                        <div className="">Amsterdam, New York</div>
                    </div>
                    <div className="PsTop">
                        Nulla duis aute in fugiat do est nulla ullamco culpa
                        consequat Lorem quis consectetur. Incididunt consequat
                        occaecat ipsum qui nulla cillum irure non.
                    </div>
                </div>
            </div>
            <div className="BottomGuy">
                <div className="BtmHeader">
                    <div className="AnimT1" onClick={() => { setShowBottomSection(false) }}>StickerMule</div>
                    <div className="AnimT1">
                        Nulla non proident aliqua deserunt magna pariatur proident veniam deserunt proident.
                    </div>
                </div>
                <div className="BtmMidMain">
                    <div className="BtmMid_1">
                        <div className="PsBottom">
                            <div className="BtmMid_Img"><img className='btm_img' src={mule2} alt="" /></div>
                        </div>
                        <div className="PsBottom">
                            Ex irure sunt consectetur velit deserunt consectetur mollit sunt ipsum minim
                            aliquip. Non amet elit in veniam cupidatat sint commodo qui. In sunt aliquip culpa magna.
                        </div>
                    </div>
                    <div className="BtmMid_2 AnimT1">
                        Deserunt dolore nisi consequat laborum fugiat deserunt duis culpa incididunt. Exercitation
                        cupidatat in in laborum voluptate aliquip id nisi non cillum excepteur deserunt nostrud. Dolore
                        ex nulla consectetur nulla do ad ut ad non laboris anim id aute laboris. Anim cillum deserunt non
                        ea do deserunt. Consequat proident cillum ad labore adipisicing nulla exercitation aliquip eu
                        ullamco do non voluptate. Consectetur ullamco eu culpa id quis commodo nostrud quis culpa ea ad
                        ullamco do non voluptate. Consectetur ullamco eu culpa id quis commodo nostrud quis culpa ea ad
                        ea do deserunt. Consequat proident cillum ad labore adipisicing nulla exercitation aliquip eu
                        ullamco do non voluptate. Consectetur ullamco eu culpa id quis commodo nostrud quis culpa ea ad
                        ullamco do non voluptate. Consectetur ullamco eu culpa id quis commodo nostrud quis culpa ea ad
                        ea do deserunt. Consequat proident cillum ad labore adipisicing nulla exercitation aliquip eu.
                        ullamco do non voluptate. Consectetur ullamco eu culpa id quis commodo nostrud quis culpa ea ad
                        ullamco do non voluptate. Consectetur ullamco eu culpa id quis commodo nostrud quis culpa ea ad
                        ea do deserunt. Consequat proident cillum ad labore adipisicing nulla exercitation aliquip eu
                    </div>
                </div>
                <div className="BtmLastM">
                    <div className="AnimT1">Designed by: STANLEY</div>
                    <div className="AnimT1">2022</div>
                </div>
            </div>
        </div>
    )
}

export default App;
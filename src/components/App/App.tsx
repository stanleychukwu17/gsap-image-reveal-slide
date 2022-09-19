import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import gsap, {Expo} from 'gsap';
import { CustomEase } from "gsap/CustomEase";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { CSSPlugin } from "gsap/CSSPlugin";



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
    const mainAppAnim = useRef<HTMLDivElement | null>(null)
    const h1Anim = useRef<HTMLDivElement | null>(null)
    const tL = useRef<GSAPTimeline | undefined>();


    // runs just once
    useEffect(() => {
        // prevents flashes when the page loads
        gsap.fromTo(mainAppAnim.current, {opacity:0}, {opacity: 1, duration: 0})

        // creates the gsap timeline
        tL.current = gsap.timeline({defaults:{duration:1, 'ease':Expo.easeInOut}});

        // grabs the before pseudo element to be animated
        const r1bBefore = CSSRulePlugin.getRule(".TopGuy__header > div:first-child::before")
        const r2Before = CSSRulePlugin.getRule(".TopGuy__header > div:nth-child(2)::before")
        const r3Before = CSSRulePlugin.getRule(".TopGuy__midImg::before")
        const rulesBeforeArray:CSSRule[] = [r1bBefore, r2Before, r3Before]

        // grabs the after pseudo element to be animated
        const r1After = CSSRulePlugin.getRule(".TopGuy__header > div:first-child::after")
        const r2After = CSSRulePlugin.getRule(".TopGuy__header > div:nth-child(2)::after")
        const r3After = CSSRulePlugin.getRule(".TopGuy__midImg::after")
        const rulesAfterArray:CSSRule[] = [r1After, r2After, r3After]

        // kicks of the timeLine animation
        tL.current
            .fromTo(rulesAfterArray,
                {cssRule: {scaleX: 0, transformOrigin: 'left'}}, {cssRule: {scaleX: 1, transformOrigin: 'left'}, stagger: .2})
            .to(rulesAfterArray, {cssRule: {scaleX: 0, transformOrigin: 'right'}})
            .to(rulesBeforeArray, {cssRule: {scaleX: 0, transformOrigin: 'top'}, duration:0, delay: -1})


        // return () => {
        // };
    }, [])

    return (
        <div className="AppMain" ref={mainAppAnim}>
            <div className="TopGuy">                
                <div className="TopGuy__header">
                    <div className="stickHd" ref={h1Anim}>StickerMule</div>
                    <div className="SvgAndOthers">
                        <div className=""><img src={check} alt="" /></div>
                        <div className="">Home of stickers</div>
                    </div>
                </div>
                <div className="TopGuy__midImg">
                    <img src={mule} alt="" />
                </div>
                <div className="TopGuy__lastMen">
                    <div className="SvgAndOthers">
                        <div className=""><img src={location} alt="" /></div>
                        <div className="">Amsterdam, New York</div>
                    </div>
                    <div className="">
                        Nulla duis aute in fugiat do est nulla ullamco culpa
                        consequat Lorem quis consectetur. Incididunt consequat
                        occaecat ipsum qui nulla cillum irure non.
                    </div>
                </div>
            </div>
            <div className="BottomGuy">
                <div className="BtmHeader">
                    <div className="">StickerMule</div>
                    <div className="">
                        Nulla non proident aliqua deserunt magna pariatur proident veniam deserunt proident.
                    </div>
                </div>
                <div className="BtmMidMain">
                    <div className="BtmMid_1">
                        <div className=""><img src={mule2} alt="" /></div>
                        <div className="">
                            Ex irure sunt consectetur velit deserunt consectetur mollit sunt ipsum minim
                            aliquip. Non amet elit in veniam cupidatat sint commodo qui. In sunt aliquip culpa magna.
                        </div>
                    </div>
                    <div className="BtmMid_2">
                        Deserunt dolore nisi consequat laborum fugiat deserunt duis culpa incididunt. Exercitation
                        cupidatat in in laborum voluptate aliquip id nisi non cillum excepteur deserunt nostrud. Dolore
                        ex nulla consectetur nulla do ad ut ad non laboris anim id aute laboris. Anim cillum deserunt non
                        ea do deserunt. Consequat proident cillum ad labore adipisicing nulla exercitation aliquip eu
                        ullamco do non voluptate. Consectetur ullamco eu culpa id quis commodo nostrud quis culpa ea ad
                        ullamco do non voluptate. Consectetur ullamco eu culpa id quis commodo nostrud quis culpa ea ad
                        ea do deserunt. Consequat proident cillum ad labore adipisicing nulla exercitation aliquip eu
                        ullamco do non voluptate. Consectetur ullamco eu culpa id quis commodo nostrud quis culpa ea ad
                        ullamco do non voluptate. Consectetur ullamco eu culpa id quis commodo nostrud quis culpa ea ad
                        ea do deserunt. Consequat proident cillum ad labore adipisicing nulla exercitation aliquip eu
                    </div>
                </div>
                <div className="BtmLastM">
                    <div className="">Designed by: STANLEY</div>
                    <div className="">2022</div>
                </div>
            </div>
        </div>

    )

}

export default App;
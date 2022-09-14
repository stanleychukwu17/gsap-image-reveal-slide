import { motion } from 'framer-motion';
import {gsap} from 'gsap';
import { CustomEase } from "gsap/CustomEase";



import './app.scss';

// importing of assets
import mule from '../../assets/images/mule.png'
import check from '../../assets/svg/circle-check.svg'
import location from '../../assets/svg/location.svg'

// registers the gsap custom plugin
gsap.registerPlugin(CustomEase);


const App = () => {

    return (
        <div className="AppMain">
            <div className="TopGuy">                
                <div className="TopGuy__header">
                    <div className="">StickerMule</div>
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
                <div className="">
                    <div className="">
                        <div className=""></div>
                        <div className="">Ex irure sunt consectetur velit deserunt consectetur mollit sunt ipsum minim aliquip. Non amet elit in veniam cupidatat sint commodo qui. In sunt aliquip culpa magna. Mollit incididunt ex id dolore et pariatur cillum proident culpa elit sit. Proident officia occaecat irure dolore consequat culpa tempor ea laboris nulla est exercitation.</div>
                    </div>
                    <div className="">
                        Deserunt dolore nisi consequat laborum fugiat deserunt duis culpa incididunt. Exercitation cupidatat in in laborum voluptate aliquip id nisi non cillum excepteur deserunt nostrud. Dolore ex nulla consectetur nulla do ad ut ad non laboris anim id aute laboris. Anim cillum deserunt non ea do deserunt. Consequat proident cillum ad labore adipisicing nulla exercitation aliquip eu ullamco do non voluptate. Consectetur ullamco eu culpa id quis commodo nostrud quis culpa ea ad.
                    </div>
                </div>
                <div className="">
                    <div className="">Designed By STANLEY</div>
                    <div className="">2022</div>
                </div>
            </div>
        </div>

    )

}

export default App;
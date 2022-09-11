import './app.scss';
import { motion } from 'framer-motion';

import mule from '../../assets/images/mule.png'



const App = () => {

    return (
        <div className="AppMain">
            <div className="TopGuy">                
                <div className="TopGuy__header">
                    <div className="">StickerMule</div>
                    <div className="">Home of stickers</div>
                </div>
                <div className="TopGuy__midImg">
                    <img src={mule} alt="" />
                </div>
                <div className="TopGuy__lastMen">
                    <div className="">
                        <div className=""></div>
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

            </div>
        </div>

    )

}

export default App;
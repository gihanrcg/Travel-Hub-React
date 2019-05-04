import React from 'react';
import Navigator from  '../Nav/Navigator';
import SlideShow from '../SlideShow/SlideShow';

function Header(){


    return(
        <div>
            {/*<marquee>TRAVELLERS' HUB</marquee>*/}
            <Navigator/>

            <SlideShow/>
        </div>

    );


}


export default Header;
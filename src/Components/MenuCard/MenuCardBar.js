import React, { Component } from 'react';
import MenuCard from "./MenuCard";
import image1 from '../SlideShow/1.jpg'
import image2 from '../SlideShow/2.jpg'
import image3 from '../SlideShow/3.jpg'


class MenuCardBar extends Component {

    render() {
        const tableStyles={
            width : '80%',

        }

        const mCard1 = {
            width : '350px',
            image : image1,
            text : 'Select your destination...',
        }

        const mCard2 = {
            width : '350px',
            image : image2,
            text : 'Plan your budget...',
        }

        const mCard3 = {
            width : '350px',
            image : image3,
            text : 'Book your travel plan...',
        }

        return (
            <table style={tableStyles} cellSpacing="20px" align="center">
                <tr>
                    <td><MenuCard  properties={mCard1}/></td>
                    <td><MenuCard  properties={mCard2}/></td>
                    <td><MenuCard  properties={mCard3}/></td>

                </tr>

            </table>

        )

    }
}


export default MenuCardBar;
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../layout/styles/slider.css';
import {S} from './Slider_Styles';
import one from './../../assets/images/about1/music-notes-svgrepo-com.png';
import two from './../../assets/images/about1/past (1).png';
import three from './../../assets/images/about1/real-world-insights-svgrepo-com.png';

type SlidePropsType = {
    pic: string
    text: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Picture src={props.pic}/>
            <S.Text>{props.text}</S.Text>
        </S.Slide>
    );
};

const items = [
   <Slide pic={one} text={'I am a professional musician by education and I know a lot about The history of art, but...'}/>,
    <Slide pic={two} text={'But I decided to leave the era of Romantism in the past  and keep up with the times'}/>,
   <Slide pic={three} text={'So now I am really keen on Web-development and looking forward to my first project!'}/>,
];
const Slider = () => (
    <S.Slider>
    <AliceCarousel
        mouseTracking
        items={items}
    />
    </S.Slider>
);

export default Slider;
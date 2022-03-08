import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useState } from 'react';
import './Photos.css'
import Footer from '../Footer/Footer';

export default function Photos() {
  
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="A1"
            src="https://scontent.fccu11-1.fna.fbcdn.net/v/t1.6435-9/87295222_3476186362453736_1828503792794992640_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=iHQ0-SDkFYkAX_vXXTM&_nc_ht=scontent.fccu11-1.fna&oh=00_AT8eOS34GQKQsO4hFXmLsislghi37KkuvdX--qh3X46CBg&oe=6245354B"
            />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="A2"
            src="https://scontent.fccu11-1.fna.fbcdn.net/v/t1.6435-9/86970150_3476186889120350_6272448446137892864_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=nrzrZX6YTT0AX-vy4Ma&tn=dhF5qEXTUpsKHfU0&_nc_ht=scontent.fccu11-1.fna&oh=00_AT9flOSKouLvWZb8SQQMVFwzAzdlsETBkjPNBHdjgSr9_A&oe=6246D18C"
             />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="A3"
            src="https://scontent.fccu11-1.fna.fbcdn.net/v/t1.18169-9/11329752_874132325992499_3691346025797471012_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=8vwmziXKj4MAX8CeTZ7&_nc_ht=scontent.fccu11-1.fna&oh=00_AT8vY3pmExFhy0Bcf-nJWYbsIKuZLS2YVSq0p6TqKcd5ow&oe=62445287"
            />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="A4"
            src="https://scontent.fccu11-1.fna.fbcdn.net/v/t1.18169-9/12794448_1024075580998172_3209140089715899158_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Cp0y3hzG2FEAX_mRBrS&_nc_ht=scontent.fccu11-1.fna&oh=00_AT_mN0Mc37dHIQhZ7C2p-n5EyXFwggJV7pwNnCiS9-Ef5g&oe=62433EE1"
            />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="A5"
            src="https://scontent.fccu11-1.fna.fbcdn.net/v/t1.18169-9/11046258_874130302659368_634405360417011590_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=heL7poazoS0AX-rHVQ3&_nc_ht=scontent.fccu11-1.fna&oh=00_AT-6AeXD4dA2Kxe6_HZtm_cG85foK6ZfzYCPqWuwyfPVhQ&oe=62451F13"
             />
  
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="A6"
            src="https://scontent.fccu11-1.fna.fbcdn.net/v/t1.18169-9/1896734_874130989325966_6657498262494722592_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=7S_yqvYfWdAAX-bHpWM&_nc_ht=scontent.fccu11-1.fna&oh=00_AT-2q1As0xmsQT7GhrKrvxOBGvWdQ2-GXn4HtQvQkdGuvQ&oe=6244293Ehttps://scontent.fccu11-1.fna.fbcdn.net/v/t1.18169-9/1896734_874130989325966_6657498262494722592_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=7S_yqvYfWdAAX-bHpWM&_nc_ht=scontent.fccu11-1.fna&oh=00_AT-2q1As0xmsQT7GhrKrvxOBGvWdQ2-GXn4HtQvQkdGuvQ&oe=6244293E"
            />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="A7"
            src="https://scontent.fccu11-1.fna.fbcdn.net/v/t1.18169-9/12096226_938995479506183_2338660650949742167_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=KLjKKvQl-NkAX-jqKGw&tn=dhF5qEXTUpsKHfU0&_nc_ht=scontent.fccu11-1.fna&oh=00_AT9WOW8qDUuX0CeXO19vqAWY0sPVygt4y5bErB2FpvDfFg&oe=62468ACF"
           />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="A8"
            src="https://scontent.fccu11-1.fna.fbcdn.net/v/t1.18169-9/11265296_874134812658917_8900750913690678169_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Aw3rYxONt3QAX8EXUW4&_nc_ht=scontent.fccu11-1.fna&oh=00_AT84ViJ62MVvPim-J8wP-OYoT363goj_y_fOhsRQU8Q0zA&oe=62465BE8"
            />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="A9"
            src="https://scontent.fccu11-1.fna.fbcdn.net/v/t1.18169-9/19610_874132952659103_5882362569665362488_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=AtbrSOEo1egAX8ud0gy&tn=dhF5qEXTUpsKHfU0&_nc_ht=scontent.fccu11-1.fna&oh=00_AT9lo6TCHBKRMfym3dPlC-70i_yMkCF5WcldQQ3sE-VrdA&oe=62437A91"
            />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="A10"
            src="https://scontent.fccu11-1.fna.fbcdn.net/v/t1.18169-9/11139358_874132595992472_3368210842032301663_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=o6CdRNDiQE0AX8GMavC&_nc_ht=scontent.fccu11-1.fna&oh=00_AT-JkL8CShqwS7ADVcBaYf29V53WiLgyzGsQmoKk7YPU8w&oe=62465599"
            />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="A11"
            src="https://scontent.fccu11-1.fna.fbcdn.net/v/t1.18169-9/11350616_874131905992541_2038990508937012082_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=OIMFhl6KKCcAX-IWMgZ&_nc_ht=scontent.fccu11-1.fna&oh=00_AT-zQVhscMlHk4xkoUVfEgUscoWbcv_dwMfmGP33WTC5rQ&oe=62450493"
             />
  
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="A12"
            src="https://scontent.fccu11-1.fna.fbcdn.net/v/t1.18169-9/11054864_874130415992690_2875306309751979937_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Gua1f7sUGdUAX-z_ghF&_nc_ht=scontent.fccu11-1.fna&oh=00_AT9rsXrjicEv3TqfH3VmC71XepoqfHuMAwgTvULoewAyLA&oe=6245D2CB"
            />
          </Carousel.Item>
      </Carousel>
      <Footer/>
      </>

    );
  }
  
  

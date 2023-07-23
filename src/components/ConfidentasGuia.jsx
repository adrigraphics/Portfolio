import React, {useState} from 'react'
import GUIA_01 from '../assets/img/GUIA-01.jpg'
import GUIA_02 from '../assets/img/GUIA-02.jpg'
import GUIA_03 from '../assets/img/GUIA-03.jpg'
import GUIA_04 from '../assets/img/GUIA-04.jpg'
import GUIA_05 from '../assets/img/GUIA-05.jpg'
import GUIA_06 from '../assets/img/GUIA-06.jpg'
import GUIA_07 from '../assets/img/GUIA-07.jpg'
import GUIA_08 from '../assets/img/GUIA-08.jpg'
import Modal from './Modal'

const ConfidentasGuia = () => {

    const data = [
        {
            "img": GUIA_01
        },
        {
            "img": GUIA_02
        },
        {
            "img": GUIA_03
        },
        {
            "img": GUIA_04
        },
        {
            "img": GUIA_05
        },
        {
            "img": GUIA_06
        },
        {
            "img": GUIA_07
        },
        {
            "img": GUIA_08
        }
    ]


const [clickedImg, setClickedImg] = useState(null);
const [currentIndex, setCurrentIndex] = useState(null);

const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.img);
};

const handleRotationRight = () => {
    const totalLength = data.length;
    if(currentIndex +1 >= totalLength) {
        setCurrentIndex(0);
        const newUrl = data[0].img;
        setClickedImg(newUrl);
        return;
    }
    const newIndex = currentIndex +1;
    const newUrl = data.filter((item) => {
        return data.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0].img;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
};

const handleRotationLeft = () => {
    const totalLength = data.length;
    if(currentIndex === 0){
        setCurrentIndex(totalLength-1);
        const newUrl = data[totalLength -1].img;
        setClickedImg(newUrl)
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
        return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
};

    return (
        <div className='wrapper'>

            <p id="salvia" className='ibm-plex text-[20px] mb-5 mt-10 text-gray-400'>

                Las Confidentas // Guía de aborto con medicamentos

            </p>
            <div className="disenoCards grid grid-cols-2 md:grid-cols-4 justify-center gap-2 w-full">

            {data.map((item, index) => (
                <div key={index} className='disenoItem cursor-pointer overflow-hidden h-[200px] rounded-md'>
                    <img
                    src={item.img} 
                    className='w-full 
                    h-full object-cover 
                    hover:scale-[120%] 
                    ease-in-out duration-300 
                    rounded-md bg-slate-300'
                    onClick={() => handleClick(item, index)}
                    />
                </div>
            ))}
            
            </div>
            {clickedImg && 
            <Modal 
            clickedImg={clickedImg} 
            handleRotationRight={handleRotationRight}
            handleRotationLeft={handleRotationLeft}
            setClickedImg={setClickedImg}
            />}
            
        </div>
    )
}

export default ConfidentasGuia
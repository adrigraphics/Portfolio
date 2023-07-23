import React, {useState} from 'react'
import sc1 from '../assets/img/sc1.jpg'
import sc2 from '../assets/img/sc2.jpg'
import sc3 from '../assets/img/sc3.jpg'
import sc4 from '../assets/img/sc4.jpg'
import sc5 from '../assets/img/sc5.jpg'
import sc6 from '../assets/img/sc6.jpg'
import sc7 from '../assets/img/sc7.jpg'
import sc8 from '../assets/img/sc8.jpg'
import Modal from './Modal'

const Santocafeto = () => {

    const data = [
        {
            "img": sc1
        },
        {
            "img": sc2
        },
        {
            "img": sc3
        },
        {
            "img": sc4
        },
        {
            "img": sc5
        },
        {
            "img": sc6
        },
        {
            "img": sc7
        },
        {
            "img": sc8
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

            <p id="rabia" className='ibm-plex text-[20px] mb-5 mt-10 text-gray-400'>

                Rabia Café // Fotografía Comercial

            </p>
            <div className="disenoCards grid grid-cols-2 md:grid-cols-4 justify-center gap-2 w-full">

            {data.map((item, index) => (
                <div className="Polaroid h-[240px] relative bg-white shadow-md">
                <div key={index} className='disenoItem mx-[6px] absolute top-[6px] left-0 right-0 cursor-pointer overflow-hidden h-[200px] rounded-md'>
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

export default Santocafeto
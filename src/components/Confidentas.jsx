import React, {useState} from 'react'
import confidentas_01 from '../assets/img/confidentas-01.png'
import confidentas_02 from '../assets/img/confidentas-02.png'
import confidentas_03 from '../assets/img/confidentas-03.png'
import confidentas_04 from '../assets/img/confidentas-04.png'
import confidentas_05 from '../assets/img/confidentas-05.png'
import confidentas_06 from '../assets/img/confidentas-06.png'
import confidentas_07 from '../assets/img/confidentas-07.png'
import confidentas_08 from '../assets/img/confidentas-08.png'
import Modal from './Modal'

const Confidentas = () => {

    const data = [
        {
            "img": confidentas_01
        },
        {
            "img": confidentas_02
        },
        {
            "img": confidentas_03
        },
        {
            "img": confidentas_04
        },
        {
            "img": confidentas_05
        },
        {
            "img": confidentas_06
        },
        {
            "img": confidentas_07
        },
        {
            "img": confidentas_08
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

                Las Confidentas Aborto Seguro // Rebranding

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

export default Confidentas
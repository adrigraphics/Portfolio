import React, {useState} from 'react'
import rc1 from '../assets/img/rc1.jpg'
import rc2 from '../assets/img/rc2.jpg'
import rc3 from '../assets/img/rc3.jpg'
import rc4 from '../assets/img/rc4.jpg'
import rc5 from '../assets/img/rc5.jpg'
import rc6 from '../assets/img/rc6.jpg'
import rc7 from '../assets/img/rc7.jpg'
import rc8 from '../assets/img/rc8.jpg'
import Modal from './Modal'

const Rabia = () => {

    const data = [
        {
            "img": rc1
        },
        {
            "img": rc2
        },
        {
            "img": rc3
        },
        {
            "img": rc4
        },
        {
            "img": rc5
        },
        {
            "img": rc6
        },
        {
            "img": rc7
        },
        {
            "img": rc8
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

export default Rabia
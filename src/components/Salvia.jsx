import React, {useState} from 'react'
import msalvia_01 from '../assets/img/msalvia-01.jpg'
import msalvia_02 from '../assets/img/msalvia-02.jpg'
import msalvia_03 from '../assets/img/msalvia-03.jpg'
import msalvia_04 from '../assets/img/msalvia-04.jpg'
import msalvia_05 from '../assets/img/msalvia-05.jpg'
import msalvia_06 from '../assets/img/msalvia-06.jpg'
import msalvia_07 from '../assets/img/msalvia-07.jpg'
import msalvia_08 from '../assets/img/msalvia-08.jpg'
import Modal from './Modal'

const Salvia = () => {

    const data = [
        {
            "img": msalvia_01
        },
        {
            "img": msalvia_02
        },
        {
            "img": msalvia_03
        },
        {
            "img": msalvia_04
        },
        {
            "img": msalvia_05
        },
        {
            "img": msalvia_06
        },
        {
            "img": msalvia_07
        },
        {
            "img": msalvia_08
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

                Salvia Inn // Branding

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

export default Salvia
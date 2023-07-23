import React, {useState} from 'react'
import f28s1 from '../assets/img/f28s1.jpg'
import f28s2 from '../assets/img/f28s2.jpg'
import f28s3 from '../assets/img/f28s3.jpg'
import f28s4 from '../assets/img/f28s4.jpg'
import f28s5 from '../assets/img/f28s5.jpg'
import f28s6 from '../assets/img/f28s6.jpg'
import f28s7 from '../assets/img/f28s7.jpg'
import f28s8 from '../assets/img/f28s8.jpg'
import Modal from './Modal'

const Veinte = () => {

    const data = [
        {
            "img": f28s1
        },
        {
            "img": f28s2
        },
        {
            "img": f28s3
        },
        {
            "img": f28s4
        },
        {
            "img": f28s5
        },
        {
            "img": f28s6
        },
        {
            "img": f28s7
        },
        {
            "img": f28s8
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

            <p id="veinte" className='ibm-plex text-[20px] mb-5 mt-10 text-gray-400'>

                Marcha por el 28S 2020 // Fotografía Documental

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

export default Veinte
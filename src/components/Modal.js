import {IoIosArrowForward, IoIosArrowBack, IoIosClose} from 'react-icons/io'

const Modal = ({ clickedImg, handleRotationRight, setClickedImg, handleRotationLeft }) => {
const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
        setClickedImg(null);
    }
};

    return (
    <>
        <div className="overlay dismiss
        z-50 gap-5 fixed top-0 left-0 right-0 w-full h-full bg-[#171129]/[0.8] flex flex-col items-center justify-center"
        onClick={handleClick}>
            <div className='bg-slate-100  shadow-lg'>
            <img src={clickedImg} className='max-h-[75vh] p-2'  />
            </div>
            <IoIosClose className="dismiss text-5xl hover:text-slate-700 hover:scale-110 transition duration-300 text-slate-500 bg-slate-100 rounded-full  cursor-pointer absolute top-10 right-8" onClick={(handleClick)} />
              <div className='arrows flex gap-10'>
                <div onClick={handleRotationLeft} className='text-4xl hover:text-slate-700 hover:scale-110 transition duration-300  text-slate-500 bg-slate-100 rounded-full p-2 cursor-pointer
                overlay-arrows__left'>
                    {" "}
                    <IoIosArrowBack />
                </div>
                <div onClick={handleRotationRight} className='right text-4xl hover:text-slate-700 hover:scale-110 transition duration-300  text-slate-500 bg-slate-100 rounded-full p-2 cursor-pointer
                overlay-arrows__right'>
                    {" "}
                    <IoIosArrowForward />
                </div>
            </div>  
        </div>
    </>
    );
};

export default Modal;
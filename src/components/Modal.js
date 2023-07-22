import {BsArrowRightCircle, BsArrowLeftCircle} from 'react-icons/bs'
import {SlClose} from 'react-icons/sl'

const Modal = ({ clickedImg, handleRotationRight, setClickedImg, handleRotationLeft }) => {
const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
        setClickedImg(null);
    }
};

    return (
    <>
        <div className="overlay dismiss
        z-50 gap-5 fixed top-0 left-0 right-0 w-full h-full bg-white/[0.9] flex flex-col items-center justify-center"
        onClick={handleClick}>
            <img src={clickedImg} className='max-h-[75vh] shadow-lg'  />
            
            <SlClose className="dismiss text-4xl hover:text-slate-700 hover:scale-110 transition duration-300  text-slate-500 cursor-pointer absolute top-10 right-10" onClick={(handleClick)} />
              <div className='arrows flex gap-10'>
                <div onClick={handleRotationLeft} className='text-4xl hover:text-slate-700 hover:scale-110 transition duration-300  text-slate-500 cursor-pointer
                overlay-arrows__left'>
                    {" "}
                    <BsArrowLeftCircle />
                </div>
                <div onClick={handleRotationRight} className='text-4xl hover:text-slate-700 hover:scale-110 transition duration-300  text-slate-500 cursor-pointer
                overlay-arrows__right'>
                    {" "}
                    <BsArrowRightCircle />
                </div>
            </div>  
        </div>
    </>
    );
};

export default Modal;
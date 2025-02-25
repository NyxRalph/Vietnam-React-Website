import Img from "../viet/Vietnam_img/"
 
export default function memeimg(){
    return( 
        <>
        <div className="imgWrapper">
            <  img src={Img} className="memeImg" alt="###"/>
            <  img src={Img} className="memeImg" alt="###"/>
        </div>
        </>
    )
}
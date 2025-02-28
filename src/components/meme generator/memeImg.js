
 
export default function Memeimg({imageSrc}){
    return( 
        <>
        <div className="imgWrapper">
            <  img src={imageSrc} className="memeImg" alt="###"/>
        </div>
        <div className="imgWrapper">
            <  img src={imageSrc} className="memeImg" alt="###"/>
        </div>
        </>
    )
}
import '../css/card.css'

export function Card({children}){
    return(
        <div className='card'>
            {children}
        </div>
    )
}
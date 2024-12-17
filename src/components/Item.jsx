export function Item({children, itemName, type}) {
    
    return (
        <div className='experience-item'>
            <img src={`src/assets/${type}/${itemName}.png`}></img>
            <h3>{children}</h3>
        </div>
    )
}
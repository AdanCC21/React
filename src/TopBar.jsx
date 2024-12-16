import "./css/topBar.css"

export function TopBar({currentPage, setCurrentPage}){
    return (
        <header className="top-bar">
            <a onClick={()=> setCurrentPage(0)}>Home</a>
            <a onClick={() => setCurrentPage(1)} >Projects</a>
            <a onClick={()=> setCurrentPage(2)} >Experience</a>
            <a onClick={()=> setCurrentPage(3)} >About Me</a>
            <a onClick={()=> setCurrentPage(4)} >Editor</a>
        </header>
    )
}
import { useState } from "react";
// import "./css/TwitterCard.css"

export function TwitterCard({userName, tag, initialIsFollowing}){
    const tageo = `@${tag}`;
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    function changeFollow(){
        setIsFollowing(!isFollowing);
    }
    
    const follow = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClass = isFollowing ? 
    "follow-card-button unfollow" : 
    "follow-card-button is-following"

    return(
        <section className="follow-card">
            <div className="follow-card-user">
                <img src="src/assets/chillDog.jpg"/>
                <section>
                    <h1 className="follow-card-name">{userName}</h1>
                    <span className="follow-card-span">{tageo}</span>
                </section>
            </div>
            <div>
                <button className={buttonClass} onClick={changeFollow}>
                    {follow}
                </button>
            </div>
        </section>
    );
}
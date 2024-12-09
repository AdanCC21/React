import React from "react";
import { TwitterCard } from "./TwitterCard";

export function App (){
    return(
        <div>
            <TwitterCard userName="Pablo" tag="pablito123" initialIsFollowing={false}></TwitterCard>
            <TwitterCard userName="Enrique" tag="enrique_23" initialIsFollowing={true}></TwitterCard>
        </div>
    );
}
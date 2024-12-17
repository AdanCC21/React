import { useState } from 'react'
import '../css/decoration.css'

export function Decoration({currentScreen}) {
    
    
    const changeDec = () => {
        switch (currentScreen) {
            case 'home':
                return <div>
                    <div className='exp-circle-left'></div>
                    <div className='exp-mini-circle-right'></div>
                    <div className="top-second"></div>
                    <div className="top-first"></div>
                    <div className="top-third"></div>
                    {/* Bottom */}
                    <div className="bottom-second"></div>
                    <div className="decoration-button"></div>
                </div>
            case 'projects':
                return <div>
                    {/* Top */}
                    <div className="top-second"></div>
                    <div className="top-first"></div>
                    <div className="top-third"></div>
                    {/* Bottom */}
                    <div className="bottom-second"></div>
                    <div className="decoration-button"></div>
                </div>
            case 'experience':
                return <div>
                    {/* Top */}
                    <div className='exp-circle-left'></div>
                    <div className='exp-circle-right'></div>
                    <div className="top-second"></div>
                    <div className="top-first"></div>
                    <div className="top-third"></div>
                    {/* Bottom */}
                    <div className="bottom-second"></div>
                    <div className="decoration-button"></div>
                </div>
        }
    }

    return (
        <div>
            {changeDec()}
        </div>
    )
}
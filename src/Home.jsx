import { Card } from './components/Card'
import { Decoration } from './components/Decoration'
import './css/home.css'

export function Home(){
    return(
        <div>
            <Decoration currentScreen={'home'}/>
            <main className='homeContainer'>
                <section className='basicInfo'>
                    <div className='profile'>
                        <img src='src/assets/io-cat.png'></img>
                    </div>
                    <div className='name-profession' >
                        <Card>Adan Gonzalez Ceseña</Card>
                        <h3>Software and emerging technologies engineer</h3>
                        <a className='download'>Download CV</a>
                    </div>
                </section>
            </main>
        </div>
    )
}

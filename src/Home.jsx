import { Card } from './Card'
import './css/home.css'

export function Home(){
    return(
        <main className='homeContainer'>
            <section className='basicInfo'>
                <div className='profile'>
                    <img src='src/assets/chillDog.jpg'></img>
                </div>
                <data className='name-profession' >
                    <Card>Adan Gonzalez Ceseña</Card>
                    <h3>Software and emerging technologies engineer</h3>
                </data>
            </section>
        </main>
    )
}

import { Decoration } from './components/Decoration'
import { Item } from './components/Item'
import './css/experience.css'

export function Experience (){
    return(
        <div className='basic'>
            <Decoration currentScreen={'experience'}/>
            <h3>I have experience using these</h3>
            <h1>languages, frameworks and softwares</h1>
            
            <section className='experience-home'>
                <Item type={'lenguage'} itemName={'c'} >C</Item>
                <Item type={'lenguage'} itemName={'cpp'} >C++</Item>
                <Item type={'lenguage'} itemName={'raylib'} >Raylib</Item>
                <Item type={'lenguage'} itemName={'dart'} >Dart</Item>
                <Item type={'lenguage'} itemName={'flutter'} >Flutter</Item>
                <Item type={'lenguage'} itemName={'java'} >Java</Item>
                <Item type={'lenguage'} itemName={'javascript'} >Javascript</Item>
                <Item type={'lenguage'} itemName={'react'} >React</Item>
                <Item type={'lenguage'} itemName={'html'} >Html</Item>
                <Item type={'lenguage'} itemName={'css'} >Css</Item>
                <Item type={'lenguage'} itemName={'python'} >Python</Item>
                <Item type={'software'} itemName={'git'} >Git</Item>
                <Item type={'software'} itemName={'github'} >GitHub</Item>
                <Item type={'software'} itemName={'visualStudioCode'} >Visual Studio Code</Item>
                <Item type={'software'} itemName={'visualStudio'} >Visual Studio</Item>
                <Item type={'software'} itemName={'intellij'} >IntelliJ</Item>
                <Item type={'software'} itemName={'premiere'} >Premiere</Item>
                <Item type={'software'} itemName={'photoshop'} >Photoshop</Item>
            </section>
        </div>
    )
}
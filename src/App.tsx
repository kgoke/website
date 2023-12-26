import Background from './assets/space-bg.png'
import Astronaut from './assets/astronaut.png'
import Clouds from './assets/clouds.png'

function App() {
    
    return(
        <div className="w-full h-screen overflow-hidden flex">
            <img src={Background} className="w-full h-full object-cover object-center absolute z-0"/>
            <img src={Clouds} className="w-full h-full object-cover object-center absolute z-10 animate-pulse"/>
            <img src={Astronaut} className="absolute z-0 animate-bounce left-1/3 top-1/4"/>
            <div className="flex flex-col w-full h-full justify-center items-center absolute z-20 bg-black bg-opacity-70">
                <h1 className='text-3xl font-bold text-pink-300'>KGOKE.COM</h1>
                <ul className='flex flex-col justify-center items-center'>
                    <li>
                        <a className='text-2xl text-pink-300 hover:font-bold' href='https://www.github.com/kgoke' target='_blank'>Github</a>
                    </li>
                    <li>
                        <a className='text-2xl text-pink-300 hover:font-bold' href='https://www.linkedin.com/in/keegan-goecke-97638821b' target='_blank'>LinkedIn</a>.
                    </li>
                    <li>
                        <a className='text-2xl text-pink-300 hover:font-bold' href='https://www.youtube.com/@kgoke' target='_blank'>YouTube</a>.
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default App

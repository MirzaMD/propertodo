import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnapchatGhost, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export function Header(){
    const box={
        background:"linear-gradient(#a2a8d3,#e7eaf6,#d59bf6)"
    }
    return(<section className='flex w-full h-[125px] justify-around items-center' style={box}>
        <h1 className='text-xl sm:text-3xl font-serif text-purple-600'>To-Do List</h1>
        <nav className='flex justify-end items-center space-x-2 sm:w-[700px]'>
        <button className='text-2xl sm:text-4xl rounded-full'><FontAwesomeIcon icon={faSnapchatGhost} color="#FEBE10"/></button>
        <a href="https://github.com/MirzaMD"><button 
        className='text-2xl sm:text-4xl rounded-full'>
            <FontAwesomeIcon icon={faGithub} color="#66FF00"/>
            </button>
            </a>
        <a href="https://www.linkedin.com/in/mohammed-hussain-091358344/"><button
         className='text-2xl sm:text-4xl rounded-full'
         ><FontAwesomeIcon icon={faLinkedin} color="#B9D9EB"/>
         </button></a>
        </nav>
    </section>)
}
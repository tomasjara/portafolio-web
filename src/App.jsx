import tareaImg from './assets/Sin título.png'
import finanzasImg from './assets/image.png'

const CardProject = ({ img, title, url, description }) => {
  return (
    <div className="max-w-96 bg-[#ebe7b7] hover:bg-[#ebe7b7f5] hover:scale-105 cursor-pointer transition-all p-5 rounded-xl shadow-xl h-[370px]">
      <div className='flex justify-center'>
        {/* <img className="rounded-lg mb-3" width={300} src={img} /> */}
        <img className="rounded-lg mb-3" width={300} src='https://thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png' />
      </div>
      <a href={url}
        // target="_blank" 
        className="text-3xl font-bold mb-1"
      >{title}</a>
      <p className="mt-3">{description}</p>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-personalizado bg-[#001f21]">

      <div className='sticky top-5 '>
        <div className='flex justify-center '>
          <div className='flex gap-2 md:gap-10 text-md md:text-xl py-5 px-8 md:py-5 md:px-10 rounded-2xl bg-[#ecc039] z-10'>
            <a className='hover:scale-110 transition-all cursor-pointer' href='#'>Inicio</a>
            <a className='hover:scale-110 transition-all cursor-pointer' href='#'>Proyectos</a>
            <a className='hover:scale-110 transition-all cursor-pointer' href='#'>Sobre mi</a>
            <a className='hover:scale-110 transition-all cursor-pointer' href='#'>Contactame</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-[calc(100vh-140px)]">
        <h1 className="text-3xl md:text-6xl font-bold text-white">Hola, Soy  <span className="text-[#ecc039]"> Tomas 👋</span></h1>
        <h1 className="text-4xl md:text-7xl font-bold text-gray-400">Front End Developer</h1>
        {/* <div className='flex gap-5 text-2xl pt-6'>
          <a className='p-3 bg-[#de4f15] text-white rounded-xl w-40 text-center' href='#'>Contactame</a>
          <a className='p-3 bg-[#de4f15] text-white rounded-xl w-40 text-center' href='#'>Sobre mi</a>
        </div> */}
      </div>
      <div className='h-10 bg-[#ecc039]'></div>
      <div className='h-10 bg-[#de4f15]'></div>

      <div className='grid  gap-5 mt-6 px-5 text-white md:w-[700px] lg:w-[1200px] mx-auto'>
        {/* md:grid-cols-2 */}
        <div className='border rounded-xl p-4'>
          {/* bg-[#029b983d] */}
          <h3 className='text-3xl mb-4 font-bold text-center'>Sobre mi 🫡</h3>
          <p className='mb-3 text-xl'>Mi objetivo como programador es crear <span className='text-[#ecc039]'>productos amigables</span> con el usuario para una <span className='text-[#ecc039]'>interaccion intuitiva</span> y poder <span className='text-[#ecc039]'>solucionar problemas.</span></p>
          <p></p>
        </div>
        {/* <div className='bg-[#029b983d] rounded-xl p-4'>

        </div> */}
      </div>

      <div className='flex justify-center my-10'>
        <h3 className='text-white text-4xl font-bold'>Proyectos</h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center " >
        <CardProject
          title={'Tareas'}
          url={'https://tareas-dev.netlify.app/'}
          img={tareaImg}
          description={'Pagina para escribir tareas y marcarlas como terminadas 👍, creada con react / firebase / tailwind'}
        />
        <CardProject
          title={'Finanzas App'}
          url={'https://finanzasdev.netlify.app/'}
          img={finanzasImg}
          description={'Pagina para registrar datos y poder realizar analisis de estos, con graficos, alertas y resumenes, creada con react / tailwind / lib de tablas / localstorage'}
        />
      </div>

      <div className='mt-20 h-10 bg-[#001f21]'></div>
      <div className='h-10 bg-[#029b99]'></div>
      <div className='h-10 bg-[#ebe7b7]'></div>
      <div className='h-10 bg-[#de4f15]'></div>
      <div className='h-10 bg-[#ecc039]'></div>
    </div>
  )
}

export default App

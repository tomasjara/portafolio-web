import tareaImg from './assets/Sin título.png'
import finanzasImg from './assets/image.png'

const CardProject = ({ img, title, url, description }) => {
  return (
    <div className="max-w-96 bg-blue-800 hover:bg-blue-700 transition-all p-5 rounded-xl text-white shadow-xl">
      <div className='flex justify-center'>
        <img className="rounded-lg mb-3" width={300}  src={img} />
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
    <div className="min-h-screen min-w-screen bg-slate-300 py-10">

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-7xl md:text-8xl font-bold">Mis <span className="text-blue-600">Proyectos</span></h1>
        <p className="text-3xl font-bold mt-5">let him cook⚠️⚠️⚠️</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center mt-5 " >
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
      {/* <div className=''>
        <span className='bg-white p-4 rounded-lg font-bold'>Sigue adelante noma, ya a estar lleno de proyectos en los que estes orgulloso.</span>
        <span className='text-8xl font-bold text-blue-700'>STAY </span>
        <span className='text-8xl font-bold text-red-500'>HARD</span>
      </div> */}
    </div>
  )
}

export default App

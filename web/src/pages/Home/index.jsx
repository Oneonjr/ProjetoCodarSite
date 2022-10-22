

export function Home() 
{
  return (
    <div className="h-screen p-5 bg-red-700 text-white flex flex-col items-center">
      <div className=" container flex justify-center max-w-5xl p-4">
        <img src="/img/logo-fundo-vinho.svg" className="w-40" />
        </div>
        <div className="container  max-w-5xl flex-1 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">

          <div className="md:flex-1">
            <img src="/public/img/img.png" className="h-64 md:h-96" />
          </div>

            <div className="md:flex-1 flex flex-col space-y-6">
              <h1 className="text-2xl text-center font-bold">Dê o seu palpite na Copa do Mundo do Catar 2022! </h1>


              <a href="/Signup" className="text-center text-red-700 bg-white px-6 py-4 rounded-xl">
                Criar minha conta
              </a>

              <a href="/Login" className="text-center text-white border border-white px-6 py-4 rounded-xl">
                Fazer login
              </a>
            </div>
        </div>
      </div>
  )
}



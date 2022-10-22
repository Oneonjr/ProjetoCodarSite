import { Icon } from "../../components"

export const Signup = () =>{
    return (
        <div>
            <header className="flex justify-center p-4 border-b border-red-300">
                <div className="container max-w-5xl flex justify-center ">
                    <img src="/img/logo-fundo-branco.svg" className="w-32 md:w-40" />
                </div>
            </header>
            
            <main className=" container max-w-xl p-4">
                <div className="p-4 flex space-x-4 items-center">
                    <a href="/">
                    <Icon name="back" className="h-6"/>
                    </a>
                    <h2 className="text-xl font-bold">Crie na sua conta</h2>
                </div>

                <form className="p-4 space-y-6">
                    
                    
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-bold text-gray-500 mb-2">Seu email</label>
                        <input name="email" id="email"type="text" placeholder="Digite seu e-mail." className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700"/>
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-bold text-gray-500 mb-2">Sua senha</label>
                        <input name="password" id="password"type="password" placeholder="Digite sua senha." className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-bold text-gray-500 mb-2">Seu nome</label>
                        <input name="name" id="name"type="text" placeholder="Digite seu nome." className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="teusernamext" className="text-sm font-bold text-gray-500 mb-2">Seu nome de usuário</label>
                        <input name="username" id="username"type="text" placeholder="Digite seu nome de usuário." className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700" />
                    </div>

                    <a href="/Incial" className="block w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl">
                        Criar minha conta
                    </a>
                </form>
            </main>
        </div>       
    )
}
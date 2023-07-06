import { useState, useContext } from "react"
import { collection, where, getDocs, query } from 'firebase/firestore'
import { db } from "../../services/firebase"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import { LoginContext } from "../../context/LoginContext"

const Login = () => {
    const { Login } = useContext(LoginContext)
    const history = useNavigate();
    const [usuario, setUsuario] = useState();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleCheckout = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Por favor llena todo los datos')
            return;
        }

        const usuario = query(
            collection(db, 'users'),
            where('email', '==', email),
            where('password', '==', password))
        getDocs(usuario)
            .then(res => {
                const newUser = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                if (newUser.length > 0) {
                    console.log("s");
                    setUsuario(newUser)
                    setError('')
                    Login(newUser)
                    history('/')
                } else {
                    console.log("f");
                    setError('Correo o contraseña incorrectos')
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <section className="relative flex flex-wrap lg:h-[90vh] lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Inicia Sesión en SmartDrink</h1>
                    <p className="mt-4 text-gray-500">
                        Para poder realizar tus compras 100% seguras.
                    </p>
                </div>

                <form className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleCheckout}>
                    <div>
                        <label htmlFor="email" className="sr-only">Correo electrónico</label>
                        <div className="relative">
                            <input type="email" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Ingresa tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Contraseña</label>
                        <div className="relative">
                            <input type="password" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            ¿No tienes cuenta?
                            <Link to={'/register'} className="ml-1 underline" href="">Registrate aquí</Link>
                        </p>

                        <button type="submit" className="inline-block border rounded-lg bg-black px-5 py-3 text-sm font-medium text-white">
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
                {
                    error && <p className="text-center font-semibold my-4 text-red-700">{error}</p>
                }
            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                    alt="Welcome"
                    src="https://cdn.foodandwineespanol.com/2018/11/coctel.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </section>
    )
}

export default Login

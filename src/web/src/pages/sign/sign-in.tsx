import React, { useState, type FormEvent } from 'react';
import { Input } from '../../components/ui/input'; 
import { Eye, EyeOff, Loader } from 'lucide-react'; 

const SignIn = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

  const LogIn = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoading(false);
  };

  return (
    <main className="grid lg:grid-cols-2 mx-7 md:mx-0 md:mt-0">
      <section className="flex flex-col justify-center py-20 md:py-44 items-center gap-5 border-black p-5 my-auto mx-auto w-full max-w-3xl">
        <form
          onSubmit={LogIn}
          className="lg:max-w-md mt-20 md:mt-32 lg:mt-0 justify-center h-full mx-auto w-full flex flex-col gap-7"
        >
          <h3 className="text-4xl font-semibold text-center hidden lg:block">
            Entrar <span className="text-red-600">com</span>
          </h3>

          <div className="flex justify-center lg:hidden">
            <img src="/path/to/logoMobile.png" className="w-72" alt="Logo" />
          </div>

          <div className="flex flex-col gap-2 text-sm text-gray-600 relative">
            <label htmlFor="user">Usuário <span className="text-red-500">*</span></label>
            <Input
              id="user"
              placeholder="Digite seu nome de usuário"
              onChange={(e) => setUser(e.target.value)}
              className={`${error1 ? "border-red-600" : ""}`}
              type="text"
              required
            />
            {/* <MdAbc fontSize={25} className="absolute right-3 top-9" /> */}
          </div>

          <div className="flex flex-col gap-2 text-sm text-gray-600 relative">
            <label htmlFor="password">Senha <span className="text-red-500">*</span></label>
            <Input
              id="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
              className={`${error2 ? "border-red-600" : ""}`}
              type={open ? "text" : "password"}
              required
            />
            <Eye fontSize={18} onClick={() => setOpen(false)} className={`${open ? "block" : "hidden"} absolute right-3 top-10 cursor-pointer`} />
            <EyeOff onClick={() => setOpen(true)} fontSize={18} className={`${open ? "hidden" : "block"} absolute right-3 top-10 cursor-pointer`} />
          </div>

          <button
            type="submit"
            className="text-white p-3 rounded-md border-0"
            disabled={loading}
            style={{ backgroundColor: "#F43806" }}
          >
            {
              loading ? (
                <div className="flex justify-center">
                  <Loader fontSize={23} style={{ animation: "spin 1s linear infinite" }} />
                </div>
              ) : "Entrar"
            }
          </button>
        </form>
      </section>

      <section className="relative hidden lg:block w-full">
        <img src="/path/to/wallpaper.png" className="h-svh" style={{ filter: "blur(3px)" }} alt="Wallpaper" />

        <div
          className="absolute inset-0 flex justify-center items-center"
          style={{ backgroundColor: "rgba(233, 54, 0, 0.493)" }}
        >
          <img src="/path/to/logo.png" style={{ width: "320px" }} alt="Logo" />
        </div>
      </section>
    </main>
  );
};

export default SignIn;
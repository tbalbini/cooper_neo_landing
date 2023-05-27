export const metadata = {
  title: 'Reset Password - Simple',
  description: 'Page description',
}

export default function ResetPassword() {
  return (
    <section className="bg-gradient-to-b from-black to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Vamos a ponerte de nuevo en pie</h1>
            <p className="text-xl text-gray-600">Ingresa la dirección de correo electrónico que utilizaste cuando te registraste. Te enviaremos un enlace para qeu puedas reestablecerla en breves.</p>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-400 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-violet-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Ingresa tu dirección de correo electrónico" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-violet-700 hover:bg-violet-800 w-full">Enviar enlace de reinicio de contraseña</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

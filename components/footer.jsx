export const Footer = () => (
  <footer className="px-5 py-3 bg-gray-800 text-gray-300 mt-auto flex flex-col md:flex-row items-center justify-between text-center w-full">
    <div className="mb-4 md:mb-0">
      &copy; Creado por <a href="https://twitter.com/LimbatusDev">Limbatus</a>. Todos los derechos reservados
    </div>
    <div className="flex justify-around">
      <a className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Política de privacidad</a>
      <a className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Términos y condiciones</a>
    </div>
  </footer>
)

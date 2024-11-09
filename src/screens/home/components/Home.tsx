import { Button } from "@/components/ui/button";
import Dashboard from "@/screens/dashboard/components";
import { BellIcon, MenuIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden w-64 overflow-y-auto bg-gray-800 md:block">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <span className="text-white font-bold text-lg">VentasPro</span>
          </div>
          <nav className="mt-5 flex-1 space-y-1 px-2">
            <a
              href="#"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md bg-gray-900 text-white"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Vendedores
            </a>
            <a
              href="#"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Clientes
            </a>
            <a
              href="#"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Reportes
            </a>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navbar */}
        <header className="bg-slate-500 shadow-sm">
          <div className="flex items-center justify-between h-16 px-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
            <div className="flex items-center">
              <Button variant="ghost" size="icon">
                <BellIcon className="h-6 w-6" />
                <span className="sr-only">Ver notificaciones</span>
              </Button>
              <Button variant="ghost" size="sm" className="ml-3">
                <Image
                  width={32}
                  height={32}
                  src="/images/profile.png"
                  className="h-8 w-8 rounded-full"
                  alt="Foto de perfil del usuario"
                />
                <span className="ml-2">John Doe</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto ">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Dashboard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

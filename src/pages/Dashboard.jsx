import CardResumo from "../components/CardResumo";
import { useState } from "react";
import { LayoutDashboard, ShoppingCart, Users, Package, ShieldCheck, FileText, Smartphone, DollarSign, TrendingUp, TextIcon } from 'lucide-react';

const Dashboard = () => {

    const [expandida, setExpandida] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">

            {/*SIDEBAR*/}
            <aside 
                className={`${expandida ? 'w-64' : 'w-20'}
                    bg-linear-to-b from-purple-600 to-indigo-800
                    text-white p-4 transition-all duration-300 ease-in-out flex flex-col`}
                onMouseEnter={() => setExpandida(true)}
                onMouseLeave={() => setExpandida(false)}
            >
                <div className="border-b border-white/20 py-2 mb-6 flex justify-center">
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        <Smartphone size={24} />
                        {expandida && <span>Antony Cell</span>}
                    </h1>
                </div>

                {/* MENU */}
                <nav className="space-y-4">
                    <menuitem icone={<LayoutDashboard />} texto="Dashboard" aberta={expandida} ativo/>
                    <MenuItem icone={<ShoppingCart />} texto="Vendas" aberta={expandida} />
                    <MenuItem icone={<Users />} texto="Clientes" aberta={expandida} />
                    <MenuItem icone={<Package />} texto="Estoque" aberta={expandida} />
                    <MenuItem icone={<ShieldCheck />} texto="Garantias" aberta={expandida} />
                    <MenuItem icone={<FileText />} texto="Relatórios" aberta={expandida} />
                </nav>
            </aside>

            {/* Conteúdo Principal */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="border-b border-gray-300 pb-0 mb-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h2>
                </div>

                {/* Cards de Resumo */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <CardResumo titulo="Total de Vendas" valor="0" icone={<ShoppingCart size={28}/>} />
                    <CardResumo titulo="Faturamento" valor="R$ 0,00" icone={<DollarSign size={28}/>} />
                    <CardResumo titulo="Lucro Total" valor="R$ 0,00" icone={<TrendingUp size={28}/>} />
                    <CardResumo titulo="Em Garantia" valor="0" icone={<ShieldCheck size={28}/>} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Caixa da esquerda */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 min-h-87.5 mt-6">
                        <h3 className="text-lg font-bold text-gray-700">Vendas por Forma de Pagamento</h3>
                        {/* O conteúdo ou gráfico entrará aqui depois */}
                    </div>
                    {/* Caixa da direita */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 min-h-87.5 mt-6">
                        <h3 className="text-lg font-bold text-gray-700">Vendas: Novo vs Seminovo</h3>
                        {/* O conteúdo ou gráfico entrará aqui depois */}
                    </div>
                </div>
            </main>
        </div>
    );
};

    const MenuItem = ({ icone, texto, aberta, ativo = false }) => (
        <div className={`flex items-center ${aberta ? 'justify-start gap-3' : 'justify-center'} 
            p-2 rounded-lg cursor-pointer transition-colors
            ${ativo ? 'bg-white/20' : 'hover:bg-white/10 text-gray-200'}`}>
            {icone}
            {aberta && <span className="whitespace-nowrap">{texto}</span>}
        </div>
    );
export default Dashboard;
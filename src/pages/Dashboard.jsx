import CardResumo from "../components/CardResumo";
import { useState } from "react";
import { LayoutDashboard, ShoppingCart, Users, Package, ShieldCheck, FileText, Smartphone, DollarSign, TrendingUp } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100">

            {/*SIDEBAR*/}
            <aside className="w-64 bg-linear-to-b from-purple-600 to-indigo-800">
                <div className="border-b border-white/20 py-6 mb-6">
                    <h1 className="text-xl font-bold flex items-center gap-2 justify-center text-gray-200"><Smartphone size={20}/> Antony Cell</h1>
                </div>
                <nav className="space-y-4">

                    {/* Dashboard */}
                    <div className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer text-gray-200">
                        <LayoutDashboard size={20}/>
                        <span>Dashboard</span>
                    </div>

                    {/* Vendas */}
                    <div className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer text-gray-200">
                        <ShoppingCart size={20} />
                        <span>Vendas</span>
                    </div>

                    {/* Clientes */}
                    <div className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer text-gray-200">
                        <Users size={20}/>
                        <span>Clientes</span>
                    </div>

                    {/* Estoque */}
                    <div className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer text-gray-200">
                        <Package size={20}/>
                        <span>Estoque</span>
                    </div>

                    {/* Garantias */}
                    <div className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer text-gray-200">
                        <ShieldCheck size={20}/>
                        <span>Garantias</span>
                    </div>

                    {/* Relatórios */}
                    <div className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer text-gray-200">
                        <FileText size={20}/>
                        <span>Relatórios</span>
                    </div>
                </nav>
            </aside>

            {/* Conteúdo Principal */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="border-b border-gray-300 pb-0 mb-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <CardResumo titulo="Total de Vendas" valor="0" icone={<ShoppingCart size={28}/>} />
                    <CardResumo titulo="Faturamento" valor="R$ 0,00" icone={<DollarSign size={28}/>} />
                    <CardResumo titulo="Lucro Total" valor="R$ 0,00" icone={<TrendingUp size={28}/>} />
                    <CardResumo titulo="Em Garantia" valor="0" icone={<ShieldCheck size={28}/>} />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
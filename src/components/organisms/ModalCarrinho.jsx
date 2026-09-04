import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { obterCarrinho } from '../../services/carrinho';

const ModalCarrinho = ({ fechar }) => {
    const navigate = useNavigate();
    const pedidos = obterCarrinho();

    const irParaCarrinho = () => {
        fechar();
        navigate('/carrinho');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <div className="bg-card w-full max-w-lg rounded-xl p-6 relative">

                <button
                    onClick={fechar}
                    className="absolute right-4 top-4 cursor-pointer"
                >
                    <X size={22} />
                </button>

                <h2 className="text-2xl font-bold mb-2">
                    Produto adicionado com sucesso!
                </h2>

                <p className="mb-5">
                    Confira os itens que estão no seu carrinho:
                </p>

                <div className="flex flex-col gap-3 max-h-80 overflow-y-auto">

                    {pedidos.map((produto) => (
                        <div
                            key={produto.id}
                            className="border rounded-md p-3 flex justify-between"
                        >
                            <div>
                                <h3>{produto.nome}</h3>
                                <p>Quantidade: {produto.quantidade}</p>
                            </div>

                            <p>R$ {produto.preco}</p>
                        </div>
                    ))}

                </div>

                <div className="flex gap-3 mt-6">

                    <button
                        onClick={irParaCarrinho}
                        className="flex-1 bg-secondary rounded-md p-3 cursor-pointer"
                    >
                        Ir para o carrinho
                    </button>

                    <button
                        onClick={fechar}
                        className="flex-1 border rounded-md p-3 cursor-pointer"
                    >
                        Continuar comprando
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ModalCarrinho;
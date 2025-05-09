import "./Lista.css"
import Editar from "../../assets/img/pen-to-square-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"

const Lista = () => {
    return (
        <section className="layout_grid listagem">
            <h1>Lista dos Filmes</h1>
            <hr />
            <div className="tabela">
                <table>
                    {/*cabecalho da tabela:0*/}
                    <thead>
                        {/*tr => table row */}
                        <tr className="cabecalho">
                            {/*th => table head */}
                            <th>Nome</th>
                            <th>Genero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    {/*tbody => table body */}
                    <tbody>
                        <tr className="item_lista">
                            <td>Velozes e Furiosos</td>
                            <td><img src={Editar} alt="" /></td>
                            <td><img src={Excluir} alt="" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </section>
    )
}
export default Lista;
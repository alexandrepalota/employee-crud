export default function DepartmentList() {

    return (
        <>
            <h1>lista de departamentos</h1>
       
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col-3">Id</th>
                        <th scope="col-3">Nome do Departamento</th>
                        <th scope="col-3"> Editar/Excluir</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td className="idDepartamento"></td>
                        <td className="departamento"></td>
                        <td>
                            <button type="submit" className=" border-dark btn btn-light mx-1">✏️</button> 
                            <button type="submit" className=" border-dark btn btn-light   ">🗑️</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td className="idDepartamento"></td>
                        <td className="departamento"></td>
                        <td className="botaoDepartamento">
                            <button type="submit" className=" border-dark btn btn-light mx-1">✏️</button> 
                            <button type="submit" className=" border-dark btn btn-light   ">🗑️</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td className="idDepartamento"></td>
                        <td className="departamento"></td>
                        <td className="botaoDepartamento">
                            <button type="submit" className=" border-dark btn btn-light mx-1">✏️</button> 
                            <button type="submit" className=" border-dark btn btn-light   ">🗑️</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
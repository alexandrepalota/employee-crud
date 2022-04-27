export default function EmployeeList() {

    return (
        <>
            <h1>Lista de funcionários</h1>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col-3">Id</th>
                        <th scope="col-3">Nome do Departamento</th>
                        <th scope="col-3"> Data de Admissão</th>
                        <th scope="col-3"> Data de Demissão</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td className="idFuncionario"></td >
                        <td className="nomeFuncionario" >Gumercindo</td >
                        <td className="admissao text-success " placeholder="xx/xx/xxxx" >Admitido em 11/11/2011</td >
                        <td className="demissao text-danger"placeholder="xx/xx/xxxx" >Demitido em 10/10/2019</td >
                        
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td className="idFuncionario"></td >
                        <td className="nomeFuncionario" >Fulado de tal</td >
                        <td className="admissao text-success" placeholder="xx/xx/xxxx" >Exercendo a função</td >
                        <td className="demissao text-danger"  placeholder="xx/xx/xxxx">xx/xx/xxxx</td >
                        
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td className="idFuncionario"></td >
                        <td className="nomeFuncionario" ></td >
                        <td className="admissao text-success" placeholder="xx/xx/xxxx" ></td >
                        <td className="demissao text-danger"  placeholder="xx/xx/xxxx"></td >
                       
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default function DepartmentForm() {

    return (
        <>
            <form>
                <h1>Cadastro de departamentos</h1>
                    <div className="row">
                        <div className="col-3">
                            <label for="exempleInputId" className="form-label" >Id</label>
                            <input type="text" className="form-control " id="disabledInput" placeholder="Seu ID" aria-label="ID Departamento" disabled/>
                        </div>
                        <div className="col">
                            <label  for="exempleInputName" className="form-label">Nome</label>
                            <input type="text" className="form-control" placeholder="Insira Seu Departamento" aria-label="Nome Departamento "/>
                        </div>
                    </div>
                    <button  type="submit" className="btn btn-primary col-1 mt-2">Salvar</button>
           </form>
        </>
    )
}
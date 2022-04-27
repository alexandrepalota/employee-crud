export default function EmployeeForm() {

    return (
        <>
            <h1>Cadastro de funcionários</h1>
            <form className=" row g-3needs-validation" novalidate>

                <div className="col-md-4 mb-3">
                    <label for="validationCustomUsername"> ID Funcionário</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="validationCustomUsername" placeholder="Seu Id" aria-describedby="inputGroupPrepend" disabled />
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <label for="validationCustom01">Nome</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="Digite seu Nome" required />
                    <div className="valid-feedback">

                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <label for="validationCustom02">CPF</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="xxx.xxx.xxx-xx" required />
                    <div className="valid-feedback">
                        Tudo certo!
                    </div>
                </div>


                <div className="col-md-4 mb-3">
                    <label for="validationCustom03">Cidade</label>
                    <input type="text" className="form-control" id="validationCustom03" placeholder="Cidade" required />
                    <div className="invalid-feedback">
                        Por favor, informe uma cidade válida.
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <label for="validationCustom04">Estado</label>
                    <input type="text" className="form-control" id="validationCustom04" placeholder="Estado" required />
                    <div className="invalid-feedback">
                        Por favor, informe um estado válido.
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <label for="validationCustom05">CEP</label>
                    <input type="text" className="form-control" id="validationCustom05" placeholder="CEP" required />
                    <div className="invalid-feedback">
                        Por favor, informe um CEP válido.
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <label for="validationCustom05">Email</label>
                    <input type="email" className="form-control" id="validationCustom05" placeholder="email@provedor.com" required />
                    <div className="invalid-feedback">
                        Por favor, informe um email válido.
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <label for="validationCustom05">Telefone</label>
                    <input type="text" className="form-control" id="validationCustom05" placeholder="(xx)xxxxx-xxxx" required />
                    <div className="invalid-feedback">
                        Por favor, informe um Numero válido.
                    </div>
                </div>
                <div className="col-md-3">
                    <label for="validationCustom04" className="form-label">Departamento</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Selecione...</option>
                        <option>...</option>
                    </select>
                    <div className="invalid-feedback">
                        Selecione um Departamento válido.
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <label for="validationCustom05">Salário</label>
                    <input type="text" className="form-control" id="validationCustom05" placeholder="R$ x.xxx,xx" required />
                    <div className="invalid-feedback">
                        Por favor, informe um Valor válido.
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <label for="validationCustom05">Data de Admissão</label>
                    <input type="text" className="form-control" id="validationCustom05" placeholder="xx/xx/xxxx" required />
                    <div className="invalid-feedback">
                        Por favor, informe uma Data válida.
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <label for="validationCustom05">Data de Demissão</label>
                    <input type="text" className="form-control" id="validationCustom05" placeholder="xx/xx/xxxx" required />
                    <div className="invalid-feedback">
                        Por favor, informe uma Data válida.
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="invalidCheck" required />
                        <label className="form-check-label" for="invalidCheck">
                            Concordo com os termos e condições
                        </label>
                        <div className="invalid-feedback">
                            Você deve concordar, antes de continuar.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
        </>
    )
}
export default function SignIn() {

    return (
        <>
            <h1>Tela de login</h1>
            <form>
                <div className=" col-3 form-group">
                    <label for="exampleInputEmail1">Usuário</label>
                    <input type="text" className="form-control" id="exampleInputLoguin1" aria-describedby="loguinHelp" placeholder="Digite seu Usuário"/>
                </div>
                <div className="col-3 form-group">
                    <label for="exampleInputPassword1">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha"/>
                </div>
                <button type="submit" className=" mt-3 btn btn-primary">Entrar</button>
            </form>
        </>
    )
}
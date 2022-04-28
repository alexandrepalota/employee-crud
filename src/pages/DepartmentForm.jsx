import { useState } from "react"
import axios from "axios"
import { AiFillSave } from 'react-icons/ai'
import Spinner from "../components/Spinner"

export default function DepartmentForm() {

    const initialDepartment = {
        id: null,
        name: ""
    }
    const [department, setDepartment] = useState(initialDepartment)
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleNameInput = event => {
        setDepartment({
            id: department.id,
            name: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        setLoading(true)
        axios.post("http://localhost:8080/departments", department)
            .then(() => {
                setSubmitted(true)
                setLoading(false)
            })

    }

    const handleAddButton = () => {
        setDepartment(initialDepartment)
        setSubmitted(false)
    }

    return (
        <>
            <h1>Cadastro de departamentos</h1>
            {submitted ? (
                <div className="alert alert-success d-flex justify-content-between align-items-center" role="alert">
                    <span>Departamento salvo com sucesso!</span>
                    <button onClick={handleAddButton} className="btn btn-primary">Adicionar novo</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-3">
                            <label htmlFor="exempleInputId" className="form-label" >Id</label>
                            <input type="text" className="form-control " id="disabledInput" placeholder="Seu ID" aria-label="ID Departamento" disabled />
                        </div>
                        <div className="col">
                            <label htmlFor="exempleInputName" className="form-label">Nome</label>
                            <input onChange={handleNameInput} type="text" className="form-control" placeholder="Insira Seu Departamento" aria-label="Nome Departamento " />
                        </div>
                    </div>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <button type="submit" className="btn btn-primary col-2 mt-2"><AiFillSave /> &nbsp; Salvar</button>
                    )}

                </form>
            )
            }
        </>
    )
}
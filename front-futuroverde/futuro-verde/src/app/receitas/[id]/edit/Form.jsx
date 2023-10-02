"use client"

import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { useState } from "react";
import { redirect } from 'next/navigation'
import { update } from "@/actions/receitas";

export default function FormEdit({receita}){
    const [message, setMessage] = useState("")
    const [receitaEdit, setReceitaEdit] = useState(receita)

    async function handleSubmit(){
        const resp = await update(receitaEdit)
        if(resp?.error){
            setMessage(resp.error)
            return
        }
        redirect("/receitas")
    }

    function handleFieldChange(field, value){
        //console.log(field, value)
        setReceitaEdit({
            ...receitaEdit,
            [field]: value
        })
    }

    return(
        <main className="bg-slate-900 mt-10 p-12 rounded-xl max-w-lg m-auto">
        <h2 className="text-2xl font-bold">Editar Conta</h2>
        <form action={handleSubmit}>
            <InputText 
                name="nome" 
                id="nome" 
                label="nome" 
                value={contaEdit.nome} 
                onChange={e => handleFieldChange("nome", e.target.value)}
            />
            <InputText 
                name="descricao" 
                id="descricao" 
                label="descricao" 
                value={receitaEdit.descricao} 
                onChange={e => handleFieldChange("descricao", e.target.value)}
            />

            <div className="flex justify-around mt-4">
                <Button href="/receitas" variant="secundary">
                    cancelar
                </Button>
                <Button element="button">
                    salvar
                </Button>
            </div>
        </form>
        <p>{message}</p>
    </main>
    )
}
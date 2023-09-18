"use client"

import { create } from "@/actions/receitas";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function FormContas() {
    const [message, setMessage] = useState("")

    async function handleSubmit(formData){
        const resp = await create(formData)
        if(resp.message){
            setMessage(resp.message)
            return
        }
        redirect("/contas")
    }

    return (
        <>
            <NavBar active="contas" />

            <main className="bg-slate-900 p-12  max-w-lg m-auto">
                <h2 className="text-2xl">Cadastrar receita</h2>
                <form action={handleSubmit}>
                    <InputText name="nome" id="nome" label="nome" />
                    <InputText name="descricao" id="descricao" label="Descrição" />

                    <div className="flex justify-around">
                        <Button element="button" icon={<CheckIcon className="h-6 w-6" />}>
                            salvar
                        </Button>
                    </div>
                </form>
                <p>{message}</p>
            </main>
        </>
    )
}
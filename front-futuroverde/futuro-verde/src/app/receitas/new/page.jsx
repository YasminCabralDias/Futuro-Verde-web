

"use client"

import { create } from "@/actions/receitas";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { useState } from "react";
import { redirect } from 'next/navigation'
import NavBar from "@/components/NavBar";

export default function FormReceitas() {
    const [message, setMessage] = useState("")

    async function handleSubmit(formData){
        const resp = await create(formData)
        if(resp.message){
            setMessage(resp.message)
            return
        }
        redirect("/receitas")
    }

    return (
        <>

            <NavBar active="receitas" />

            <main className="bg-slate-900 p-12  max-w-lg m-auto">
                <h2 className="text-2xl">Cadastrar receita</h2>
                <form action={handleSubmit}>
                    <InputText name="nome" id="nome" label="nome" />
                    <InputText name="descricao" id="descricao" label="Descrição" />

                    <div className="flex justify-around">
                        <Button element="button">
                            salvar
                        </Button>
                    </div>
                </form>
                <p>{message}</p>
            </main>
        </>
    )
}
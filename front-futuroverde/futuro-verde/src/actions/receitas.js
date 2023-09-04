"use server"

import { revalidatePath } from "next/cache"

export async function create(formData) {
    const url = "http://localhost:8080/api/receitas"

    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)
    if (resp.status !== 201){
        const json = await resp.json()
        const erros = json.reduce((str, erro) => str += ". " + erro.message, "")
        return {message: "Não foi possível cadastrar" + erros}
    }
    revalidatePath("/receitas")
    return {ok: "success"}
} 

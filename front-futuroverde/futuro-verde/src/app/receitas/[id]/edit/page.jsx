import { getReceita } from "@/actions/receitas";
import NavBar from "@/components/NavBar";
import FormEdit from "./Form";

export default async function FormReceitas({params}) {

    const receita = await getReceita(params.id)

    return (
        <>
            <NavBar active="receitas" />
            <FormEdit receita={receita} />
        </>
    )
}
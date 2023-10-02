import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { getReceitas } from "@/actions/receitas";


export default async function Home() {
  const data = await getReceitas()

  return (
    <>
      <NavBar active={"receitas"} />

      <main className="bg-slate-900 mt-20 m-auto max-w-lg p-12 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Receitas</h2>
          <Button href="/receitas/new">
            Adicionar receita
          </Button>
        </div>

        <div id="data" className="text-slate-300 m-1">
        {data.map(receita => <DataRow key={receita.id} receita={receita} /> )}
        </div>
      </main>
    </>

  )
}
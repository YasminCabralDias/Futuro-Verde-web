
import DataRow from "./DataRow";
import Button from "@/components/Button";

async function getReceitas(){
  const url = "http://localhost:8080/api/receitas"
  const resp = await fetch(url, { next: { revalidate: 3600 } })
  if (!resp.ok) throw new Error("Não pode carregar os dados")
  return resp.json()
}

export default async function Home() {
  const data = await getReceitas()

return (
    <>
      <div active={"receitas"} />

      <main className="bg-green-500 m-20 p-12 rounded-xl">

      <div className="flex justify-between items-center">
          <h2 className="text-2xl">Contas</h2>
          <Button href="/receitas/new">
            Cadastrar
          </Button>
      </div>

        <div id="data">
          {(receita => <DataRow receita={receita} /> )}
        </div>
      </main>
    </>
 
  )
}

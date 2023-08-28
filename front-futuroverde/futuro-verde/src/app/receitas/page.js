
import DataRow from "./DataRow";

async function getReceitas(){
  const url = "http://localhost:8080/api/receitas"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  if (!resp.ok) throw new Error("Não pode carregar os dados")
  return resp.json()
}

export default async function Home() {
  const data = await getReceitas()

return (
    <>
      <div active={"receitas"} />

      <main className="bg-green-500 m-20 p-12 rounded-xl">

<h2 className="text-2xl">Receitas</h2>s
        <div id="data" className="m-1">
          {(receita => <DataRow receita={receita} /> )}
        </div>
      </main>
    </>
 
  )
}
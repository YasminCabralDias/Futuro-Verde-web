
import DropMenu from "@/components/DropMenu";
import Header from "@/components/header"

export default function Receitas({receita}) {
  
    const {nome} = Receitas
    
    return (
      <>
      <Header/>
        <div>
          <h1 className="text-white flex-col justify-center items-center"> Receitas </h1>
  
          {/*<img style={{width: "20%", marginLeft: "675px"}} src="https://www.receiteria.com.br/wp-content/uploads/receitas-de-comida-vegana-02-730x449-1.jpg" alt="receita"/>
          <img style={{width: "20%", marginLeft: "675px"}} src="https://www.receiteria.com.br/wp-content/uploads/receitas-de-comida-vegana-02-730x449-1.jpg" alt="receita"/>
          <img style={{width: "20%", marginLeft: "675px"}} src="https://www.receiteria.com.br/wp-content/uploads/receitas-de-comida-vegana-02-730x449-1.jpg" alt="receita"/>
          <img style={{width: "20%", marginLeft: "675px"}} src="https://www.receiteria.com.br/wp-content/uploads/receitas-de-comida-vegana-02-730x449-1.jpg" alt="receita"/>
    */}
          <div id="data-row" className="group/row flex items-center justify-between">
              <div className="flex gap-1">
                  <span>{nome}</span>
                  <span>
                  <DropMenu receita={receita}/> 
                  </span>
              </div>
          </div>           
        </div>
      </>
    )
  }
  
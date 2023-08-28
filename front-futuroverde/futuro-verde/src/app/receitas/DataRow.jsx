


export default function Receitas() {
  
    const {nome} = Receitas
    
    return (
      <>
      <Header/>
        <div>
          <h1 className="text-white flex flex-col justify-center items-center text-xs"> Receitas </h1>
  
          {/*<img style={{width: "20%", marginLeft: "675px"}} src="https://www.receiteria.com.br/wp-content/uploads/receitas-de-comida-vegana-02-730x449-1.jpg" alt="receita"/>
          <img style={{width: "20%", marginLeft: "675px"}} src="https://www.receiteria.com.br/wp-content/uploads/receitas-de-comida-vegana-02-730x449-1.jpg" alt="receita"/>
          <img style={{width: "20%", marginLeft: "675px"}} src="https://www.receiteria.com.br/wp-content/uploads/receitas-de-comida-vegana-02-730x449-1.jpg" alt="receita"/>
          <img style={{width: "20%", marginLeft: "675px"}} src="https://www.receiteria.com.br/wp-content/uploads/receitas-de-comida-vegana-02-730x449-1.jpg" alt="receita"/>
    */}
          <div id="data-row" className="group/row flex items-center justify-between hover:bg-slate-800 p-2 rounded cursor-pointer">
              <div className="flex gap-1">
                  <span>{nome}</span>
              </div>
              <div className="flex items-center">
                  <span>R$ 100.00</span>
                  <span className="invisible group-hover/row:visible" >
                     
                  </span>
              </div>
          </div>
  
        
  
  
          
        </div>
      </>
    )
  }
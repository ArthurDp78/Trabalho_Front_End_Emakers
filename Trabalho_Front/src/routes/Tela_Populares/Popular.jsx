import { useState } from 'react'
import './Popular.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
function Popular() {
  
  return (
  <div>
    <div className='containerP'>
      <Navbar></Navbar>
      <div className='middleP'>
        <h1 className='textiP'>Populares</h1>
        <div className='partP'>
          <div className='imagecontainerP'>
            <div className='ballP'>
              1º
            </div>
            <img src='/src/imgs/imgpart1.png' className='imgP'></img>
          </div>
          <div className='textboxP'>
              <h2 className='texttP'>
              God of War
              </h2>
              <p className='textP'>
              Kratos é pai novamente. Como mentor e protetor de Atreus, um filho determinado a ganhar seu respeito, ele é forçado a encarar e controlar a fúria que há muito tempo o define enquanto viaja por um mundo ameaçador com o seu filho. Com a vingança contra os deuses do Olimpo no passado, Kratos agora vive no reino das divindades e monstros nórdicos. É nesse mundo duro e impiedoso que ele deve lutar para sobreviver enquanto ensina seu filho a fazer o mesmo e tenta impedi-lo de repetir os erros cruéis do Fantasma de Esparta.
              </p>
          </div>
        </div>

        <div className='partdP'>
          <div className='imagecontainerP'>
              <div className='ballP'>
                2º
              </div>
              <img src='/src/imgs/imgpart2.png' className='imgP'></img>
            </div>
          <div className='textboxP'>
              <h2 className='texttP'>Horizon Zero Dawn</h2>
              <p className='textP'>
              Em um futuro distante, dominado por máquinas colossais que vagam pela Terra, a natureza retomou as ruínas da nossa civilização esquecida e pequenos grupos de sobreviventes se dividem em diferentes tribos. Empunhe o arco e a lança de Aloy, uma jovem caçadora de máquinas exilada da sua tribo, que parte em busca da verdade sobre suas origens e o misterioso mundo que ela precisa salvar.
              </p>
          </div>
          
        </div>

        <div className='partP'>
        <div className='imagecontainerP'>
            <div className='ballP'>
              3º
            </div>
            <img src='/src/imgs/imgpart3.png' className='imgP'></img>
          </div>
          <div className='textboxP'>
              <h2 className='texttP'>Days Gone</h2>
              <p className='textP'>
              Days Gone é um jogo de ação e aventura em mundo aberto que se passa em um ambiente adverso dois anos após uma pandemia mundial devastadora.Entre na pele do antigo motociclista fora da lei Deacon St. John, um caçador de recompensas que tenta achar uma razão para viver numa terra cercada pela morte. Vasculhe assentamentos abandonados em busca de equipamentos para produzir itens e armas valiosos ou arrisque-se com outros sobreviventes que tentam ganhar a vida honestamente... ou de formas mais violentas.
              </p>
          </div>
        </div>
      </div>
    </div>
      <footer>
        <Footer></Footer>
      </footer>
      
    </div>
  )
};

export default Popular

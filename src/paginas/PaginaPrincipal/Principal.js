import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import "./Principal.css"
import Menu from '../../menu/Menu'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../footer/Footer'
import larOasis from '../../assets/larOasis1.png'
import casaLuz from '../../assets/casaLuzDoCaminho5.png'
import obraSocial from '../../assets/Obra-Social-Dona-Meca2-removebg-preview.png'
import defaultBackground from '../../Imagens/background.png'
import soVamos from '../../assets/soVamos3.jpeg'
import larOasisFun from '../../assets/larOasis3.png'
import casaLuzFun from '../../assets/casaLuzDoCaminho3.png'
import soVamosFun from '../../assets/soVamos5.jpeg'
import obraSocialFun from '../../assets/Obra-Social-Dona-Meca4.jpeg'





export default function Principal() {

  const [imagemFundo, setImagemFundo] = useState(defaultBackground)

  let data = [
    {
      id: 1,
      imgFun: larOasisFun,
      imgSrc: larOasis,
      text: 'Lorem Ipsum is simply dummy textt of the printing and typesetting industry1111'
    },
    {
      id: 2,
      imgFun: casaLuzFun,
      imgSrc: casaLuz,
      text: 'Lorem Ipsum is simply dummy textt of the printing and typesetting industry2222'
    },
    {
      id: 3,
      imgFun: obraSocialFun,
      imgSrc: obraSocial,
      text: 'Lorem Ipsum is simply dummy textt of the printing and typesetting industry3333'
    },
    {
      id: 4,
      imgFun: soVamosFun,
      imgSrc: soVamos,
      text: 'Lorem Ipsum is simply dummy textt of the printing and typesetting industry4444'
    }
  ]

  const [file, setFile] = useState(-1);

  const handleClick = (index) => {
    setFile(index)
    console.log(data[index].imgFun, document.getElementById('fundo'))
    setImagemFundo(data[index].imgFun)
  }

  useEffect(() => {
    document.getElementById('fundo').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)), url(${imagemFundo}`
    // document.getElementById('fundo').style.backgroundColor = linear-gradient(rgba(0, 0, 0, 0.7),
    //   rgba(0, 0, 0, 0.7));



    /* background-image: linear-gradient(rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)), url('../../Imagens/background.png'); */
  }, [imagemFundo])

  return (
    <>

      {/* <header>
        <Menu />
      </header> */}

      <main className='man' id='fundo'  >
        <div>
              <Menu />
            </div>
        <Container>
          <Row id='principal-row'>
            <Col className='sm={6}'>
              <div className='principal-texto'>
                <h1 className='principal-titulo' >Titulo</h1>
                <p className='principal-descricao' >
                  {file !== -1 ? data[file].text : "nfuhurshurihiuvif"}
                </p>
              </div>
            </Col>

            <Col className='sm={6}'>

              <div className='cards-col'>
                {
                  data.map((x, index) => {
                    return (
                      <div className='cardse' >
                        <img src={x.imgSrc} className='imagemdoCard' key={index} onClick={() => handleClick(index)} />
                      </div>
                    )
                  })
                }
              </div>
            </Col>
          </Row>

        </Container>
      </main>



      <footer className='rodape-principal'>
        <Footer />
      </footer>

      <Outlet />
    </>
  )
}
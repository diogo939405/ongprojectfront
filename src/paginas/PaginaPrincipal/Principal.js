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
import fotoFundo from '../../assets/R.jpeg'
import soVamos from '../../assets/soVamos3.jpeg'
import larOasisFun from '../../assets/larOasis3.png'
import casaLuzFun from '../../assets/casaLuzDoCaminho3.png'
import soVamosFun from '../../assets/soVamos5.jpeg'
import obraSocialFun from '../../assets/Obra-Social-Dona-Meca4.jpeg'





export default function Principal() {

  const [imagemFundo, setImagemFundo] = useState(fotoFundo)

  let data = [
    {
      id: 1,
      titulo: 'Lar Oásis',
      imgFun: larOasisFun,
      imgSrc: larOasis,
      text: 'ONG dedicada à realocação de animais em situação de rua e abandono, proporcionando a eles novos lares cheios de amor e cuidado. Nossa missão é transformar a vida desses animais, oferecendo-lhes uma segunda chance e um futuro melhor.'
    },
    {
      id: 2,
      titulo: 'Casa Luz do Caminho',
      imgFun: casaLuzFun,
      imgSrc: casaLuz,
      text: ' Lar acolhedor para idosos carentes, localizado em Mandaqui, São Paulo (SP), onde proporcionam cuidados especiais e apoio contínuo. O objetivo é garantir que os residentes vivam com dignidade, conforto e alegria, em um ambiente seguro e atencioso.'
    },
    {
      id: 3,
      titulo: 'Obra Social Dona Meca',
      imgFun: obraSocialFun,
      imgSrc: obraSocial,
      text: 'A Obra Social Dona Meca - ou OSDM - é uma instituição atuante há 25 anos em habilitação e reabilitação de crianças e adolescentes com deficiência, atendendo de forma gratuita, atualmente, mais de 250 crianças e jovens - Rio de janeiro(RJ)'
    },
    {
      id: 4,
      titulo: 'Só Vamos',
      imgFun: soVamosFun,
      imgSrc: soVamos,
      text: 'Só Vamos é uma iniciativa social dedicada a ajudar pessoas em situação de vulnerabilidade, fornecendo refeições nutritivas e itens de primeira necessidade. O compromisso é melhorar a qualidade de vida dessas pessoas, oferecendo apoio essencial e esperança para um futuro melhor.'
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
  }, [imagemFundo])

  return (
    <>
      <main className='man' id='fundo'  >
        <div>
          <Menu />
        </div>
        <Container>
          <Row id='principal-row'>
            <Col className='sm={6}'>
              <div className='principal-texto'>
                <h1 className='principal-titulo' >  {file !== -1 ? data[file].titulo : "Ajude"}</h1>
                <p className='principal-descricao' >
                  {file !== -1 ? data[file].text : "Não podemos ajudar a todos, mas podemos fazer a diferença na vida de alguém. - Ronald Reagan"}
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
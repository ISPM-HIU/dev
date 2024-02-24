import React, { useEffect, useState } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Table
} from "react-bootstrap";
import '../style/listeFako.css'
import useHttps from "hooks/useHttp";
import trash from '../assets/img/effacer.png';
import modify from '../assets/img/bouton-modifier.png';
function Signalement(){
  const { http } = useHttps();
  const [listeFako, setListeFako] = useState([]);
  const getData = ()=>{
    http.get('/signal/').then((response)=>{
      setListeFako(response.data)
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">
                  Liste des poubelles
                  <p className="card-category">
                  Voici la liste de tous les poubelles qui sont signalé
                </p>
                </Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Description</th>
                      <th className="border-0">Location</th>
                      <th className="border-0">État</th>
                      <th className="border-0">QrCode</th>
                      <th className="border-0">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listeFako.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>
                            {item.id}
                          </td>
                          <td>
                            {item.fako.name}
                          </td>
                          <td>
                            {item.fako.location}
                          </td>
                          <td>
                            {item.fako.isValid ? "Plein" : "vide"}
                          </td>
                          <td>
                            qrCode
                          </td>
                          <td>
                            <Image style={{ cursor: 'pointer' }} src={modify} width={15} id={item.id} onClick={onSuppr}></Image>{'  '}<Image src={trash} style={{ cursor: 'pointer' }} width={15} id={item.id} onClick={onSuppr}></Image>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signalement;

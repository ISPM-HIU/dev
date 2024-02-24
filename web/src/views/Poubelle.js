import React, { useEffect, useState } from "react";

// react-bootstrap components
import {
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
  Modal,
  Form,
  Image
} from "react-bootstrap";

import { NavLink } from "react-router-dom";
import trash from '../assets/img/effacer.png';
import modify from '../assets/img/bouton-modifier.png';
import add from '../assets/img/poubelle.png'
import useHttps from "hooks/useHttp";
function Poubelle() {
  const { http } = useHttps();
  const [show, setShow] = useState(false);
  const [fako, setFako] = useState({
    name: '',
    location: ''
  })
  const [listeFako, setListeFako] = useState([
    {
      id: null,
      name: null,
      location: null,
      isValid: null
    }
  ]);
  const getFako = () => {
    http.get('/fako').then(
      (response) => {
        setListeFako(response.data);
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    )
  }
  useEffect(() => {
    getFako();
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    http.post('/fako/', {
      name: fako.name,
      location: fako.location
    }).then(
      async (response) => {
        await getFako();
        setShow(false)
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }

  const onSuppr = (e) => {
    e.preventDefault();
    http.delete(`/fako/${e.current.id}`, {
      id: e.current.id
    }).then((result) => {
      getFako();
      console.log(result);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une poubelle</Modal.Title>
        </Modal.Header>
        <Form onSubmit={onSubmit}>
          <Modal.Body>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Description</Form.Label>
              <Form.Control value={fako.name} onChange={(e) => setFako({ ...fako, name: e.target.value })} type="text" placeholder="Entrer sa description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Lieu</Form.Label>
              <Form.Control value={fako.location} onChange={(e) => setFako({ ...fako, location: e.target.value })} type="text" placeholder="Entrer son location" />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Annuler
            </Button>
            <Button variant="primary" type='submit'>
              Valider
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header style={{ display: 'grid', gridTemplateColumns: '[title] 50% [vide] 30% [button] 20%' }}>
                <Card.Title as="h4" style={{ gridColumn: 'title' }}>
                  Liste des poubelle
                  <p className="card-category">
                  Voici la liste de tous les poubelle inscrits
                </p>
                </Card.Title>
                <Image style={{ gridColumn: 'button', justifySelf:'center',cursor: 'pointer' }} src={add} width={40} onClick={() => setShow(true)}></Image>
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
                            {item.name}
                          </td>
                          <td>
                            {item.location}
                          </td>
                          <td>
                            {item.isValid ? "Plein" : "vide"}
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

export default Poubelle;

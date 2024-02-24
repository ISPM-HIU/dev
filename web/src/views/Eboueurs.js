import React, { useEffect, useState } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Modal,
  Form,
  Image,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import '../style/listeFako.css'
import addUser from '../assets/img/utilisateur.png'
import useHttps from "hooks/useHttp";
function Eboueurs() {
  const { http } = useHttps();
  const [user, setUser] = useState({
    name:'',
    last_name: '',
    number:'',
    type:'eboueur'
  });
  const [userId, setUserId] = useState('');
  const [listUser, setListUser] = useState([]);
  const [show, setShow] = useState({
    add: false,
    assign: false
  });
  const [listeFako, setListeFako] = useState([]);
  const getFako = ()=>{
    http.get('/signal/').then((response)=>{
      setListeFako(response.data.fako.filter((item)=>item.isValid == false))
    }).catch((err)=>{
      console.log(err);
    })
  }
  const onSubmitAdd = (e)=>{
    e.preventDefault();
    http.post('/users/',{
      name: user.name,
      last_name: user.last_name,
      number: user.number,
      password:'test',
      email:'test',
      type:'eboueur'
    }).then((response)=>{
      getUser()
      setShow({...show, add: false});
    }).catch((err)=>{
      console.log(err);
    })
  }
  const onsubmitAssign = (e)=>{
    e.preventDefault();
    http.post('/users/asign/',{
      userId: userId,
      fakoId:''
    }).then((response)=>{
      getUser();
      setShow({...show, assign: false})
    }).catch((err)=>{
      console.log(err);
    })
  }
  const onShowModalAssign = (e)=>{
    getFako();
    setUserId(e.current.id);
    setShow({...show, assign: true})
  }
  const getUser = ()=>{
    http.get(`/users/type/${user.type}`).then((response)=>{
      setListUser(response.data)
    }).catch((err)=>{console.log(err);})
  }
  useEffect(()=>{
    getUser()
  },[])
  return (
    <>
    <Modal show={show.add} onHide={() => setShow({...show, add: false})}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une éboueurs</Modal.Title>
        </Modal.Header>
        <Form onSubmit={onSubmitAdd}>
          <Modal.Body>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nom</Form.Label>
              <Form.Control value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} type="text" placeholder="Entrer sa description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Prenom</Form.Label>
              <Form.Control value={user.last_name} onChange={(e) => setUser({...user, last_name: e.target.value})} type="text" placeholder="Entrer son location" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Numéro telephone</Form.Label>
              <Form.Control value={user.number} onChange={(e) => setUser({...user, number: e.target.value})} type="text" placeholder="Entrer son location" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow({...show, add: false})}>
              Annuler
            </Button>
            <Button variant="primary" type='submit'>
              Valider
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* Modal creation */}
      <Modal show={show.assign} onHide={() => setShow({...show, add: false})}>
        <Modal.Header closeButton>
          <Modal.Title>Assigner une éboueurs par une tâche</Modal.Title>
        </Modal.Header>
        <Form onSubmit={onsubmitAssign}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Poubelles</Form.Label>
              <Form.Control value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} type="text" placeholder="Entrer sa description" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow({...show, assign: false})}>
              Annuler
            </Button>
            <Button variant="primary" type='submit'>
              Valider
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* Modal assigne */}
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
            <Card.Header style={{ display: 'grid', gridTemplateColumns: '[title] 50% [vide] 30% [button] 20%' }}>
                <Card.Title as="h4" style={{ gridColumn: 'title' }}>
                  Liste des éboueurs
                  <p className="card-category">
                  Voici la liste de tous les éboueurs inscrits
                </p>
                </Card.Title>
                <Image style={{ gridColumn: 'button', justifySelf:'center',cursor: 'pointer' }} src={addUser} width={40} onClick={()=>setShow({...show, add: true})}></Image>
              </Card.Header>
              <Card.Body>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="main-box clearfix">
                        <div className="table-responsive">
                          <table className="table user-list">
                            <thead>
                              <tr>
                                <th><span>Nom et prenom</span></th>
                                <th><span>Date de création</span></th>
                                <th className="text-center"><span>Disponibilité</span></th>
                                <th><span>Numéro téléphone</span></th>
                                <th>&nbsp;</th>
                              </tr>
                            </thead>
                            <tbody>
                              {listUser.map((item)=>{
                                return(
                                  <tr key={item.id}>
                                <td>
                                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt />
                                    <a href="#" className="user-link">{item.name}</a>
                                    <span className="user-subhead">{item.last_name}</span>
                                </td>
                                <td>
                                  {item.createdAt}
                                </td>
                                <td className="text-center">
                                  <span className="label label-default">{item.isDispo ? "Non dispo" : "Dispo"}</span>
                                </td>
                                <td>
                                  <span className="label label-default">{item.number}</span>
                                </td>
                                <td style={{width:'20%'}}>
                                    <span className="fa-stack" id={item.id} onClick={onShowModalAssign}>
                                      <i className="fa fa-square fa-stack-2x"></i>
                                      <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                    </span>
                                  <a href="#" className="table-link">
                                    <span className="fa-stack">
                                      <i className="fa fa-square fa-stack-2x"></i>
                                      <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                    </span>
                                  </a>
                                  <a href="#" className="table-link danger">
                                    <span className="fa-stack">
                                      <i className="fa fa-square fa-stack-2x"></i>
                                      <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                    </span>
                                  </a>
                                </td>
                              </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                        <ul className="pagination pull-right">
                          <li><a href="#"><i className="fa fa-chevron-left"></i></a></li>
                          <li><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">4</a></li>
                          <li><a href="#">5</a></li>
                          <li><a href="#"><i className="fa fa-chevron-right"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Eboueurs;

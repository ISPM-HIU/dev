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
import useHttps from "hooks/useHttp";

function Signaleur() {
  const { http } = useHttps();
  const [listUser, setListUser] = useState([])
  const typeUser = 'avertisseur'
  const getUser = ()=>{
    http.get(`/users/type/${typeUser}`).then((response)=>{
      setListUser(response.data)
    }).catch((err)=>{console.log(err);})
  }
  useEffect(()=>{
    getUser()
  },[])

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
            <Card.Header >
                <Card.Title as="h4" >
                  Liste des signaleur
                  <p className="card-category">
                  Voici la liste de tous les signaleur qui a déja signalé
                </p>
                </Card.Title>
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
                                  <a href="#" className="table-link">
                                    <span className="fa-stack">
                                      <i className="fa fa-square fa-stack-2x"></i>
                                      <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                    </span>
                                  </a>
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

export default Signaleur;

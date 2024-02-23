import React from "react";

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
} from "react-bootstrap";
import '../style/listeFako.css'

function Signalement(){
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Light Bootstrap Table Heading</Card.Title>
                <p className="card-category">
                  Created using Montserrat Font Family
                </p>
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
                                <th><span>User</span></th>
                                <th><span>Created</span></th>
                                <th className="text-center"><span>Status</span></th>
                                <th><span>Email</span></th>
                                <th>&nbsp;</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt />
                                    <a href="#" className="user-link">Mila Kunis</a>
                                    <span className="user-subhead">Admin</span>
                                </td>
                                <td>
                                  2013/08/08
                                </td>
                                <td className="text-center">
                                  <span className="label label-default">Inactive</span>
                                </td>
                                <td>
                                  <a href="#"><span className="__cf_email__" data-cfemail="14797d7875547f617a7d673a777b79">[email&#160;protected]</span></a>
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
                              <tr>
                                <td>
                                  <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt />
                                    <a href="#" className="user-link">George Clooney</a>
                                    <span className="user-subhead">Member</span>
                                </td>
                                <td>
                                  2013/08/12
                                </td>
                                <td className="text-center">
                                  <span className="label label-success">Active</span>
                                </td>
                                <td>
                                  <a href="#"><span className="__cf_email__" data-cfemail="ed808c9f818283ad8f9f8c838982c38e8280">[email&#160;protected]</span></a>
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
                              <tr>
                                <td>
                                  <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt />
                                    <a href="#" className="user-link">Ryan Gossling</a>
                                    <span className="user-subhead">Registered</span>
                                </td>
                                <td>
                                  2013/03/03
                                </td>
                                <td className="text-center">
                                  <span className="label label-danger">Banned</span>
                                </td>
                                <td>
                                  <a href="#">jack@nicholson</a>
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
                              <tr>
                                <td>
                                  <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt />
                                    <a href="#" className="user-link">Emma Watson</a>
                                    <span className="user-subhead">Registered</span>
                                </td>
                                <td>
                                  2004/01/24
                                </td>
                                <td className="text-center">
                                  <span className="label label-warning">Pending</span>
                                </td>
                                <td>
                                  <a href="#"><span className="__cf_email__" data-cfemail="2b435e465b43594e526b49444c4a595f05484446">[email&#160;protected]</span></a>
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
                              <tr>
                                <td>
                                  <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt />
                                    <a href="#" className="user-link">Robert Downey Jr.</a>
                                    <span className="user-subhead">Admin</span>
                                </td>
                                <td>
                                  2013/12/31
                                </td>
                                <td className="text-center">
                                  <span className="label label-success">Active</span>
                                </td>
                                <td>
                                  <a href="#">spencer@tracy</a>
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
                              <tr>
                                <td>
                                  <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt />
                                    <a href="#" className="user-link">Mila Kunis</a>
                                    <span className="user-subhead">Admin</span>
                                </td>
                                <td>
                                  2013/08/08
                                </td>
                                <td className="text-center">
                                  <span className="label label-default">Inactive</span>
                                </td>
                                <td>
                                  <a href="#"><span className="__cf_email__" data-cfemail="84e9ede8e5c4eff1eaedf7aae7ebe9">[email&#160;protected]</span></a>
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
                              <tr>
                                <td>
                                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt />
                                    <a href="#" className="user-link">George Clooney</a>
                                    <span className="user-subhead">Member</span>
                                </td>
                                <td>
                                  2013/08/12
                                </td>
                                <td className="text-center">
                                  <span className="label label-success">Active</span>
                                </td>
                                <td>
                                  <a href="#"><span className="__cf_email__" data-cfemail="ddb0bcafb1b2b39dbfafbcb3b9b2f3beb2b0">[email&#160;protected]</span></a>
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
                              <tr>
                                <td>
                                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt />
                                    <a href="#" className="user-link">Ryan Gossling</a>
                                    <span className="user-subhead">Registered</span>
                                </td>
                                <td>
                                  2013/03/03
                                </td>
                                <td className="text-center">
                                  <span className="label label-danger">Banned</span>
                                </td>
                                <td>
                                  <a href="#">jack@nicholson</a>
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
                              <tr>
                                <td>
                                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt />
                                    <a href="#" className="user-link">Emma Watson</a>
                                    <span className="user-subhead">Registered</span>
                                </td>
                                <td>
                                  2004/01/24
                                </td>
                                <td className="text-center">
                                  <span className="label label-warning">Pending</span>
                                </td>
                                <td>
                                  <a href="#"><span className="__cf_email__" data-cfemail="137b667e637b61766a53717c747261673d707c7e">[email&#160;protected]</span></a>
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
                              <tr>
                                <td>
                                  <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt />
                                    <a href="#" className="user-link">Robert Downey Jr.</a>
                                    <span className="user-subhead">Admin</span>
                                </td>
                                <td>
                                  2013/12/31
                                </td>
                                <td className="text-center">
                                  <span className="label label-success">Active</span>
                                </td>
                                <td>
                                  <a href="#">spencer@tracy</a>
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

export default Signalement;

import useHttps from 'hooks/useHttp';
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export const Modals = (props) => {
    const fako = props.fakoCreate;
    return (
        <>
            
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter une dabapako</Modal.Title>
                </Modal.Header>
                <Form onSubmit={props.onSubmit}>
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
                    <Button variant="secondary" onClick={props.handleClose}>
                        Annuler
                    </Button>
                    <Button variant="primary" type='submit'>
                        Valider
                    </Button>
                </Modal.Footer>
                </Form>
            </Modal>
            
        </>
    )
}
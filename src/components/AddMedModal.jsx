import { useState } from 'react'
import { connect } from 'react-redux'
import { Modal, ModalBody, ModalFooter, ModalTitle, Button } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/ModalHeader'
import { AddMedForm } from './AddMedForm'
import { addMedicine } from '../redux/actions'

const AddMedModal = ( props ) => {
    const [name, setName] =  useState('')
    const [type, setType] =  useState('')
    const [qnt, setQnt] =  useState('')

    const { show, setShow, addMedicine } = props
    
    return (
        <>
            <Modal show={show} onHide={() => setShow(!show)} backdrop="static">
                <ModalHeader closeButton>
                    <ModalTitle>Add Medicine</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <AddMedForm 
                        name={setName}
                        type={setType}
                        qnt={setQnt}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={() => setShow(!show)}>
                        Close
                    </Button>
                    <Button 
                        variant="primary" 
                        onClick={() => {
                            const data = {
                                name,
                                type,
                                qnt,
                            }
                            addMedicine(data)
                            setShow(!show)
                        }}
                    >
                        Add
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default connect(null, { addMedicine })(AddMedModal)
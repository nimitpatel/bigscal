import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Table, Button, FormControl } from "react-bootstrap"
import { deleteMedicine } from '../redux/actions'

const MedTable = ({ medicines, deleteMedicine }) => {
    const [ meds, setMeds ] = useState(medicines)
    const [ idToDel, setIdToDel ] = useState('')

    useEffect(() => {
        setMeds(medicines)
    }, [medicines])

    const handleDel = () => {
        deleteMedicine(idToDel)
    }

    const handleCheck = (target, id) => {
        if (target.checked) {
            setIdToDel([...idToDel, id])
        } else {
            const updatedIds = idToDel.filter(del => del !== id)
            setIdToDel(updatedIds)
        }
    }
    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {
                    meds.map( ({id, name, type, qnt}, ids) => (
                        <tr key={id}>
                            <td>
                                <FormControl type="checkbox" onClick={(e) => handleCheck(e.target, ids)} 
                                />
                            </td>
                            <td>Edit</td>
                            <td>{name}</td>
                            <td>{type}</td>
                            <td>{qnt}</td>
                        </tr>
                    ))
                }
                {idToDel.length > 0 && <Button onClick={() => handleDel()}>Delete</Button>}
            </tbody>
        </Table>
    )
}

export default connect(null, { deleteMedicine })(MedTable)
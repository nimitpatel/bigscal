import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Col, Row, Button } from 'react-bootstrap'
import AddMedModal from './AddMedModal'
import MedTable from './MedTable'

const Home = ({ medicines }) => {
    const [show , setShow ] = useState(false)
    const [meds, setMeds ] = useState(medicines)

    useEffect(() => {
        setMeds(medicines)
    }, [medicines])

    return (
        <>
            <Container>
                <Row>
                    <Col><h1><b>Medicines</b></h1></Col>
                    <Col>
                        <Button onClick={() => setShow(!show)}>+</Button>
                    </Col>
                </Row>
                <Row>
                    <MedTable medicines={meds} />
                </Row>
            </Container>
            <AddMedModal show={show} setShow={setShow} />
        </>
    )
}

const mapStateToProps = state => {
    return {
        medicines: state
    }
}

export default connect(mapStateToProps)(Home)
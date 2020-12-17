import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'

export const AddMedForm = ({ name, type, qnt }) => {
    return (
        <>
            <Form>
                <FormGroup>
                    <FormLabel>Name</FormLabel>
                    <FormControl
                        type="text"
                        name="name" 
                        onChange={(e) => name(e.target.value)} 
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Type</FormLabel>
                    <FormControl 
                        as="select"
                        name="type"
                        onChange={(e) => type(e.target.value)} 
                    >
                        <option>Tablet</option>
                        <option>Capsule</option>
                        <option>Syrup</option>
                        <option>Cream</option>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl
                        type="number"
                        name="qnt"
                        min="1"
                        max="100"
                        onChange={(e) => qnt(e.target.value)} 
                    />
                </FormGroup>
            </Form>
        </>
    )
}
import React from 'react'
import { Button, CardHeader, CardText, CardBody } from 'reactstrap';
export default function about() {
    return (
        <React.Fragment>
            <CardHeader><h5>About</h5></CardHeader>
            <CardBody>
                <CardText >This todo list web application is developed by @vibin_marish using React JS and React-Strap.</CardText>
                <CardText>Source Code of this project :</CardText>
                <div>
                    <Button style={{ backgroundColor: '#123C69' }} className=" btn-dark" href="https://github.com/vibinmarish">Github</Button>
                </div>
            </CardBody>
        </React.Fragment>
    )
}

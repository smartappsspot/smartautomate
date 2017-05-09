import React from 'react'
import styles from '../styles/style.css'
import TextContent from './TextContent.js'
import {Accordion,Panel,Jumbotron,Glyphicon,Button,Collapse,Well,Col,Row,Popover} from 'react-bootstrap'

export default class StartUpPage extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    
    toggleButton1(){
        
    }
    
    toggleButton = () => {
        this.setState({ open: !this.state.open })
    }
    
    render(){
        var halfPoint= screen.width/2 -140
        return (
            <div>
                <div style={{ height: 100 }}>
                <Popover
                  id="popover-basic"
                  placement="top"
                  positionLeft="43vw"
                  positionTop="12vh"
                >
                    <strong>Tired of opening same sites at every Restart. Let's automate it!!</strong>
                </Popover>
                </div>
                <Row className="rowStyle">
                    <Col md={12} className="clickButtonStyle">
                        <Button bsStyle="success" onClick={this.toggleButton.bind(this)} >
                          <Glyphicon glyph="hand-down"/> Click Here
                        </Button>
                    </Col>
                </Row>
                
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                          <TextContent/>
                        </Well>
                    </div>
                </Collapse> 
            </div>
            )
        
    }
    

    
}

function AccordianComponent(){
    var headerVal = "Click Here!!"
    const headerWithGlyph = (
    <Button bsStyle="success"><Glyphicon glyph="hand-down"/> Click Here </Button>
    
    )
    return(
        <div>
            <Jumbotron>
                <h1> App Name </h1>
                <p> Tired of opening same sites at every Restart. Let's automate it!!</p>
            </Jumbotron>
            <Accordion>
                <Panel header={headerWithGlyph}  eventKey="1">
                    Hello
                </Panel>
            </Accordion>            
        </div>    
    )
}


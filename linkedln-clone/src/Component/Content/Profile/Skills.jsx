import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap';

const Skills=(props) =>{
    
    return(
        <>
          <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
          <Container>
                <Button className="bg-primary">Take Skill quiz</Button>                       
                <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.                                               
                </p>                                                                      
          </Container>                                                    
        </Jumbotron>
        </>
    )
}

export default Skills
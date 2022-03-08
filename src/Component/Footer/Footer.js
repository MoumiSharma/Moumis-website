import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <Container>
            <Row xs={1} md={2}>
                <Col>
                <h5 className='copyright'>
                    <i class='fa-solid fa-copyright'></i> Copyright 2022 By MoumiSharma
                </h5>
                <div className='H'><i class="fa fa-facebook" aria-hidden="true"></i><i class="fa fa-linkedin" aria-hidden="true"></i><i class="fa fa-twitter" aria-hidden="true"></i><i class="fa fa-google-plus" aria-hidden="true"></i></div>
                </Col>

            </Row>
        </Container>
    </div>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, InputNumber } from 'antd';
import { Button, Accordion, Card } from 'react-bootstrap';
export default function Notification() {
  return (
    <div>
      <div className="help-details">
        <div className="help-details-head">
          <h2>Notifikacije</h2>
        </div>
        <div className="help-details-body">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" className="help-details-answer">
                POKLON KARTICA (25.04.2021)
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Ukoliko naručite proizvode u vrijednosti iznad 500 kuna ,dobivate poklon "Beauty Spot" karticu u vrije
                  vrijednosti od 200 kuna . Akcija vrijedi do kraja mjeseca.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1" className="help-details-answer">
                Akcija 1+1 (15.03.2021)
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Jednostavno povoljno – Od 1.travnja u "Beauty Spot-u" webshopu možete pronaći ponudu proizvoda iz
                  pogodnosti jednostavno povoljno. Potražite ponude 1+1 gratis, uz koje kupnjom jednog proizvoda, drugi
                  dobivate besplatno, a tu su i ponude 2+1 gratis uz koje ćete uz kupnju dva proizvoda treći dobiti na
                  dar. Pogodnost vrijedi u webshopu, u razdoblju 0d 1. do 15. travnja 2021.godine.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2" className="help-details-answer">
                30 % Happy weekend (27.02 i 28.02)
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Samo ovaj vikend je akcija 30 % posto na sve proizvode koji se odnose na dekorativnu šminku Uz
                  dekorativnu šminku se ubrajaju i lakovi.Pogodnost vrijedi u webshopu, u razdoblju 0d 1. do 15. ožujka
                  2021.godine.
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="7" className="help-details-answer">
                10% na Hugo Bosss poklon pakete(20.02.2020)
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
                  Na Hugo Boss pakete ide 20 % na cijenu.. Akcija se odnosi samo na Hugo Boss poklon paketi . Pogodnost
                  vrijedi u webshopu, u razdoblju 0d 1. do 15. veljače 2021.godine.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

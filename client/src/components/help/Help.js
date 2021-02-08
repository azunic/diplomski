import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, InputNumber } from 'antd';
import { Button, Accordion, Card } from 'react-bootstrap';
export default function Help() {
  return (
    <div>
      <div className="help-details">
        <div className="help-details-head">
          <h2>FAQ Učestala pitanja</h2>
        </div>
        <div className="help-details-body">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" className="help-details-answer">
                Kada ću dobit svoj paket?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Za pakete koji se dostavljaju na vašu odabranu adresu rok isporuke je 2 – 5 radnih dana dok je rok za
                  isporuke u odabrane Douglas parfumerije do 8 radnih dana.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1" className="help-details-answer">
                Isporučujete li vikendom?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Pakete isporučujemo isključivo radnim danom.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2" className="help-details-answer">
                Kakvi su troškovi slanja i tko dostavlja?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Dostava paketa se vrši putem kurirske službe GLS Hrvatska, te je raspoloživa na cjelokupnom teritoriju
                  Republike Hrvatske osim na pojedinim otocima. Cijena dostave iznosi 35 kuna i navedena je u pregledu
                  košarice prije izvršenja plaćanja. Za narudžbe u vrijednosti iznad 360,00 kn cijena dostave je
                  besplatna.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3" className="help-details-answer">
                Dostavljate li pakete izvan Hrvatske?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>Otpremu (dostavu) vršimo isključivo na području Republike Hrvatske.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4" className="help-details-answer">
                Hoću li biti obaviješten/a kada je paket spreman za preuzimanje?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  Prilikom odabira opcije za preuzimanje paketa u nekoj od ponuđenih dostavnih dućana primit ćete
                  obavijest putem e-maila u trenutku kada paket bude spreman za preuzimanje.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5" className="help-details-answer">
                Mogu li promijeniti narudžbu?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  U slučaju da želite promijeniti narudžbu kontaktirajte nas na info@beautyppot.hr ili putem telefona na
                  broj: 0800 213421
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6" className="help-details-answer">
                Mogu li otkazati narudžbu?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  Narudžbe se mogu otkazati u bilo kojem trenutku unutar 14 dana kontaktom na info@beautyspot.hr ili
                  putem telefona na broj 0800 23134
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="7" className="help-details-answer">
                Mogu li napraviti narudžbu za poklon?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
                  Ako želite voljenu ili dragu osobu iznenaditi poklonom nudimo vam i tu mogućnost. Nakon odabira
                  željenog artikla, prilikom završetka kupovine u drugom koraku „podaci o korisniku“ odznačite kućicu
                  „Adresa za isporuku robe je ista kao i adresa naručitelja“ te u za to predviđene rubrike unesite
                  podatke osobe kojoj želite poslati poklon, a mi ćemo odraditi ostatak.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="8" className="help-details-answer">
                Mogu li vratiti narudžbu/pravo povrata?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="8">
                <Card.Body>
                  Kupac ima pravo na povrat kupljenog proizvoda, bez navođenja razloga, u roku od 14 dana od dana
                  preuzimanja robe. Više o tome pročitajte na poveznicu Povrat/reklamacija robe. Preduvjet jednostranog
                  raskida Ugovora jest da roba nije korištena te da se nalazi u originalnoj zapakiranoj ambalaži. Kupac
                  nema pravo na jednostrani raskid ugovora tj. povrat kupljenog proizvoda u roku 14 dana ako je predmet
                  kupnje zapečaćena roba koja zbog zdravstvenih ili higijenskih razloga nije pogodna za vraćanje, a bila
                  je otpečaćena nakon dostave. Kupac snosi trošak vraćanja proizvoda, povrat paketa se vrši putem
                  kurirske službe GLS Hrvatska, a cijena iznosi 35 kn.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

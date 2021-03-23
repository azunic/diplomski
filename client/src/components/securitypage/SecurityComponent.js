import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input, InputNumber } from 'antd';
import { Button, Accordion, Card } from 'react-bootstrap';
export default function SecurityComponent() {
  return (
    <div>
      <div className="security-details">
        <div className="security-details-head">
          <h2>Sigurnost</h2>
        </div>
        <div className="security-details-body">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" className="security-details-answer">
                Pri registraciji na BeautySpot internetsku prodavaonicu bit ćete dužni kreirati lozinku koju morate
                zadržati samo za sebe i ne dijeliti je s drugim osobama. Odgovorni ste za sve akcije i narudžbe koje su
                naručene pod vašom lozinkom. Ako znate ili sumnjate da još netko ima Vašu lozinku, dužni ste nas
                obavijestiti o tome e-mailom na beauty@spot.hr. Postoji li bilo kakva sumnja da se događa propust u
                sigurnosti,Beauty Spot d.o.o. ima pravo od vas tražiti da promijenite lozinku ili mogu blokirati vaš
                korisnički račun.
              </Accordion.Toggle>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" className="security-details-answer">
                Zaštita privatnosti opisuje kako BeatuySpot web aplikacija d.o.o. postupa s vašim osobnim podacima koje
                zaprimi tijekom korištenja Beatuy Spot Internet prodavaonice. Pod osobnim podacima smatraju se vaši
                identifikacijski podaci: ime i prezime, e-mail adresa, kućna adresa i broj telefona, odnosno podaci koji
                inače nisu javno dostupni, a za koje BeautySpot d.o.o. sazna tijekom vašeg korištenja BeautySpot
                Internet prodavaonice. Beauty Spot d.o.o će vaše osobne podatke čuvati u tajnosti, te ih neće
                distribuirati, objavljivati, davati trećim stranama na korištenje niti ih na bilo koji drugi način
                učiniti dostupnima bilo kojoj trećoj fizičkoj osobi bez vaše prethodne suglasnosti.
              </Accordion.Toggle>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Input } from '../../components';
import { Button } from '../../components';
import { Navigation } from '../../components';

import { BoxSent } from '../../components/Button/styles';

const Forms: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [messageSent, setMessageSent] = useState(false);

  const handleClick = () => {
    setFirstName('');
    setLastName('');

    setMessageSent(true);

    setTimeout(() => {
      setMessageSent(false);
    }, 5000);
  };

  return (
    <>
      <Navigation />

      <Input
        label="Nome"
        id="firstName"
        placeholder="Ex: José"
        value={firstName}
        onChange={setFirstName}
      />

      <Input
        label="sobrenome"
        id="lastName"
        placeholder="EX: santos"
        value={lastName}
        onChange={setLastName}
      />

      <Button onClick={() => handleClick()}>Enviar</Button>

      {messageSent ? (
        <BoxSent>
          <h1 style={{ paddingLeft: '40px' }}>
            Mensagem enviada!
          </h1>
        </BoxSent>
      ) : (
        <h1 style={{ paddingLeft: '40px' }}>
          Olá meu nome é {firstName} {lastName}
        </h1>
      )}
    </>
  );
};

export default Forms;

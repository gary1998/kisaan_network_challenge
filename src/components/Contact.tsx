import React from 'react';
import {
    IonItem, IonAvatar, IonLabel
} from '@ionic/react';
import {
    Link
} from 'react-router-dom';

interface ContainerProps {
  fname: string;
  lname: string;
  phone: number;
}

const Contact: React.FC<ContainerProps> = ({ fname, lname, phone }) => {
  return (
        <IonItem key={phone}>
          <IonAvatar slot="start">
            <img src="https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/male_avatar-512.png"/>
          </IonAvatar>
          <IonLabel>
            <h2>{fname} {lname}</h2>
            <Link to={{pathname: '/info', state: {fname: fname, lname: lname, phone: phone}}}>See details...</Link>
          </IonLabel>
        </IonItem>
  );
};

export default Contact;

import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Style.css';
import ContactList from '../components/ContactList';

const contactList = require('../db.json').contacts;

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ContactList list={contactList}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;

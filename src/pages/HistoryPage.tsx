import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Style.css';
import HistoryList from '../components/HistoryList';

const historyList = require('../db.json').history;

const HistoryPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>History</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <HistoryList list={historyList}/>
      </IonContent>
    </IonPage>
  );
};

export default HistoryPage;

import React from 'react';
import {
    IonItem, IonAvatar, IonLabel
} from '@ionic/react';

interface HistoryProps {
  to: string;
  otp: number;
  status: string;
  time: Date;
  messages: [{
      id: number;
  }];
  errors: [{
      code: number;
      message: string;
  }];

}

const History: React.FC<HistoryProps> = ({ to, otp, status, time, messages, errors }) => {
  return (
        <IonItem>
          <IonAvatar slot="start">
            <img src={status==="success"?"https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/15-512.png":"https://cdn1.iconfinder.com/data/icons/basic-ui-icon-rounded-colored/512/icon-02-512.png"}/>
          </IonAvatar>
          <IonLabel>
            <h3><b>Receiver:</b>&nbsp;{to}</h3>
            <h2><b>Status:</b>&nbsp;{status==="success"?`Success (Tracking ID: ${messages[0].id})`:errors[0].code+" - "+errors[0].message}</h2>
            <p><b>Time:</b>&nbsp;{time}</p>
            <p><b>OTP:</b>&nbsp;{otp}</p>
          </IonLabel>
        </IonItem>
  );
};

export default History;

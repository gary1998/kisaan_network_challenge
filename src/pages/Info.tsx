import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonButton } from '@ionic/react';
import './Style.css';
import {
  Link
} from 'react-router-dom'

interface InfoProps {
  location: {
    state: {
      fname: string;
      lname: string;
      phone: number;
    }
  }
}

class Info extends React.Component<InfoProps> {
  render(){
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{this.props.location.state?this.props.location.state.fname:"NONE"} {this.props.location.state?this.props.location.state.lname:""}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem>
            <IonLabel>Phone: {this.props.location.state?this.props.location.state.phone:""}</IonLabel>
            <IonButton><Link className="btn" to={{pathname: '/send', state: {showLoading: false, fname: this.props.location.state?this.props.location.state.fname:"", lname: this.props.location.state?this.props.location.state.lname:"", phone: this.props.location.state?this.props.location.state.phone:""}}}>Send Message</Link></IonButton>
          </IonItem>
        </IonContent>
      </IonPage>
    )
  }
};

export default Info;

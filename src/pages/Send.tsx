import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLoading, IonAlert, IonTextarea, IonLabel } from '@ionic/react';
import './Style.css';
import { Redirect } from "react-router-dom";

interface SendProps {
    location: {
      state: {
        fname: string;
        lname: string;
        phone: number;
        showLoading: boolean;
      }
    }
}
  
interface SendState {
    showLoading: boolean;
    otp: number;
    text: string;
    textEditable: boolean;
}

class Send extends React.Component<SendProps, SendState> {
    constructor(props: SendProps){
        super(props);
        this.state = {
            showLoading: false,
            otp: Math.floor(100000+Math.random()*900000),
            text: "Hi! Your OTP is: ",
            textEditable: false,
        }
    }

    sendSMS = () => {
        this.setState({showLoading: true});
        const url = "https://api.textlocal.in/send";
        const details = require('../constants.json');
        const message = `${this.state.text} ${this.state.otp}`;
        const numbers = this.props.location.state.phone;
        fetch(`${url}?apikey=${details.textlocalAPIKey}&sender=${details.textlocalSender}&message=${message}&numbers=${numbers}`).then(body => {
            return body.json()
        }).then(data => {
            fetch(`http://localhost:8080/history`, {
                method: "POST",
                body: JSON.stringify(Object.assign({time: new Date().toLocaleString(), to: `${this.props.location.state.fname} ${this.props.location.state.lname} (${this.props.location.state.phone})`, otp: this.state.otp}, data)),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(() => {
                this.setState({showLoading: false});
                window.location.href="/history";
            });
        });
    }

    render(){
        return (
            <IonPage>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Send Message</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent>
                  <IonLoading
                    isOpen={this.state.showLoading}
                    onDidDismiss={() => this.setState({showLoading: false})}
                    message={'Sending...'}
                  />
                  <IonItem>
                    <IonLabel>
                      Receiver:
                    </IonLabel>
                    <IonInput color="primary" readonly value={`${this.props.location.state?this.props.location.state.fname:""} ${this.props.location.state?this.props.location.state.lname:""} (${this.props.location.state?this.props.location.state.phone:""})`}></IonInput>
                  </IonItem>
                  <br></br>
                  <IonItem>
                    <IonTextarea color="primary" readonly={!this.state.textEditable} value={`${this.state.text} ${this.state.otp}`}></IonTextarea>
                    <IonButton onClick={() => {this.setState({textEditable: !this.state.textEditable})}}>Toggle Editability</IonButton>
                  </IonItem>
                  <br></br>
                  <IonButton expand="full" onClick={()=>{this.sendSMS()}}>Send</IonButton>
              </IonContent>
            </IonPage>
        )
    }
};

export default Send;

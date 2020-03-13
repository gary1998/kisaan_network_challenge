# GitHub Page for Kissan Network Challenge
[Visit Website](https://gary1998.github.io/home)
***Kindly note, since the application uses a dev-server to store history of transactions and GitHub pages support only static website publishing. So, the application gets into UnresolvedPromise Error after sending OTP while trying to store the transaction details and finds out that server is unavailabe. You can run the application locally to avoid the issue.***

## Steps to run locally:
* Install dependencies:
```bash
npm i
```

* Install json-server and Ionic CLI globally:
```bash
npm i -g json-server @ionic/cli
```

* Run dev-server:
```bash
npm run dev-server
```

* Run application:
```bash
ionic serve
```

### Application Specs ###

* **Frontend**: [Ionic React](https://ionicframework.com/docs/react)
* **Backend**: Javascript ES6
* **SMS API**: [TextLocal](https://www.textlocal.in/)
* **Others**: Capacitor

### Current TextLocal Account has only 10 Credits, which means only 10 SMSs can be sent. You can use your own TextLocal Account, by changing the APIKey in `constants.json` ###

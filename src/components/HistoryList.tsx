import React from 'react';
import History from './History';

interface History {
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

interface HistoryListProps {
    list: History[];
}

const HistoryList: React.FC<HistoryListProps> = ({ list }) => {
  return (
        <div>
            {    
                list.slice(0).reverse().map(item => {
                    return <History to={item.to} otp={item.otp} status={item.status} time={item.time} messages={item.messages?item.messages:[{id: -1}]} errors={item.errors?item.errors:[{code: -1, message: ""}]}></History>
                })
            }
        </div>
  );
};

export default HistoryList;

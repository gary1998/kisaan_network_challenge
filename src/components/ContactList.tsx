import React from 'react';
import Contact from './Contact';

interface Contact {
  fname: string;
  lname: string;
  phone: number; 
}

interface ContactListProps {
    list: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ list }) => {
  return (
        <div>
            {    
                list.map(item => {
                    return <Contact key={item.phone} fname={item.fname} lname={item.lname} phone={item.phone}></Contact>
                })
            }
        </div>
  );
};

export default ContactList;

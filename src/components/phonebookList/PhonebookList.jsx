import {
  PhonebookListStyled,
  PhonebookListItem,
  PhonebookListWrap,
  DeleteButton,
} from './PhonebookList.styled';

import { Title, Label, Input } from '../phonebook/Phonebook.styled';

const PhonebookList = ({ contacts, value, onChange, onClick }) => {
  return (
    <PhonebookListWrap>
      <Title>Contacts</Title>
      <Label>
        Search contacts by name
        <Input value={value} onChange={onChange}></Input>
      </Label>
      <PhonebookListStyled>
        {contacts.map(el => {
          return (
            <PhonebookListItem key={el.id}>
              {el.name}:{el.number}
              <DeleteButton type="button" onClick={onClick} id={el.id}>
                Delete
              </DeleteButton>
            </PhonebookListItem>
          );
        })}
      </PhonebookListStyled>
    </PhonebookListWrap>
  );
};

export default PhonebookList;

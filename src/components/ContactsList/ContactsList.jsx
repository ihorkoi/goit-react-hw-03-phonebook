import { ListItem, Button, Number } from './ContactList.styled';

export const ContactsList = ({ props, removeContact }) => {
  return (
    <div>
      <ul>
        {props.map(({ name, id, number }) => {
          return (
            <ListItem key={id}>
              {name}: <Number>{number}</Number>
              <Button onClick={() => removeContact(id)}>Delete</Button>
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};
// }

import { Table } from './Contacts.styled';
import { deleteContacts } from 'redux/operations';
import { selectedContacts, selectIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectedContacts);

  const deleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <Table>
      <tbody>
        {isLoading === false &&
          filteredContacts.map(({ id, name, phone }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{phone}</td>
                <td>
                  <button onClick={() => deleteContact(id)}>Delete</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

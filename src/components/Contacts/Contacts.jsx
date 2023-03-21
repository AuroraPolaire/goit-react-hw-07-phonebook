import { Table } from './Contacts.styled';
import { deleteContacts } from 'redux/operations';
import { getContactsList, getFilter, getIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const contactsList = useSelector(getContactsList);
  const filterQuery = useSelector(getFilter);

  const normalizedFilter = filterQuery.toLowerCase();
  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

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

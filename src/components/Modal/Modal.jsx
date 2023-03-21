import React from 'react';
import { Overlay, ModalBox } from './Modal.styled';

export const Modal = id => {
  console.log(id);
  const handleSubmit = e => {
    // e.preventDefault();
    // updateContacts({ name, number });
    // resetForm();
  };

  return (
    <Overlay>
      <ModalBox>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input name="title" type="text" />
          </label>
          <label>
            Phone
            <input name="link" type="text" />
          </label>
          <button type="submit">Change</button>
          <button type="submit">Close</button>
        </form>
      </ModalBox>
    </Overlay>
  );
};

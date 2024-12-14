import { createSelector } from "@reduxjs/toolkit";
import { selectContacts, selectFilter } from "../auth/selectors";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = (state) => state.filters.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.filters.name;

export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;
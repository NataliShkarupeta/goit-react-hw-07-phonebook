export const selectorFilter = state => state.filter.filter;
export const selectorContact = state => state.contacts.contacts;
export const selectorIsLoading = state => state.contacts.isLoading;
export const selectorError = state => state.contacts.error;

export const selectorFilterArreyContacts = state => {
  const filter = selectorFilter(state);
  const contact = selectorContact(state);
  if (filter.length > 0) {
    return contact.filter(cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  } else {
    return contact;
  }
};

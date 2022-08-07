export const contacts = state => state.contacts.contacts;
export const isFetching = state => state.contacts.isFetching;

const contactSelectors = {
  contacts,
  isFetching,
};

export default contactSelectors;

import { createContext, useState } from 'react';
export const allEvents = createContext(null);
import PropTypes from 'prop-types';

const AllProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const providerInfo = {
    isOpen,
    setOpen,
  };
  return (
    <allEvents.Provider value={providerInfo}>{children}</allEvents.Provider>
  );
};

export default AllProvider;
AllProvider.propTypes = {
  children: PropTypes.node,
};

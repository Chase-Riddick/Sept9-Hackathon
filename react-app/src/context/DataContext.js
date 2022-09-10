import { createContext, useContext, useEffect, useState } from 'react';

export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

export default function ContextProvider(props) {
  const [userData, setUserData] = useState('');

  return (
    <DataContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}
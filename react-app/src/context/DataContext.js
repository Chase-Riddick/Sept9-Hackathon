import { createContext, useContext, useEffect, useState } from 'react';

export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

export default function ContextProvider(props) {
  const [userData, setUserData] = useState('');
  const [questions, setQuestions] = useState(
    {
      1: "What holiday did you most look forward to when you were 8 years old?",
      2: "What film, music or icon made a big impression on you?",
      3: "What food can't you stand?",
  });

  return (
    <DataContext.Provider
      value={{
        userData,
        setUserData,
        questions,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}
import React, { useContext } from 'react';

import { AppContext } from '../App';

export interface IAppProps {
}

export default function Context() {
  const details = useContext(AppContext)
  return (
    <>
      {details && (
        <div>
          <h2>Linguagem: {details.language}</h2>
          <h4>Framework: {details.framework}</h4>
          <p>Quantidade de peojetos: {details.projects}</p>
        </div>
      )}
    </>
  );
}

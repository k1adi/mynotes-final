import React from 'react';

function useInput(defaultValue){
  const [value, setValue] = React.useState(defaultValue);
  const changeValueHandler = (event) => setValue(event.target.value);

  return [value, changeValueHandler];
}

export default useInput;
import React from 'react';

export const useUserLoggedIn = () => {
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);
  return { userLoggedIn, setUserLoggedIn };
};

export const useEmployeeLoggedIn = () => {
  const [employeeLoggedIn, setEmployeeLoggedIn] = React.useState(false);
  return { employeeLoggedIn, setEmployeeLoggedIn };
};

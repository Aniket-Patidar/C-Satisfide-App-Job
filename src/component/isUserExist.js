import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { currentStudent } from '../redux/action/studentAction';

const useTokenAndFetchCurrentUser = () => {
  const dispatch = useDispatch();

  console.log("jee");

  useEffect(() => {
    const checkTokenAndFetchCurrentUser = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        dispatch(currentStudent()); // Dispatch action to fetch current student if token exists
      }
    };

    checkTokenAndFetchCurrentUser();

    // Cleanup function
    return () => {
      // Perform cleanup if necessary
    };
  }, [dispatch]);

  return null; // You can return any value you want or omit this line if not needed
};

export default useTokenAndFetchCurrentUser;

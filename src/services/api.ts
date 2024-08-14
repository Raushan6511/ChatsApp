// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/auth';

// export const sendVerificationCode = async (phoneNumber: string) => {
//   console.log(phoneNumber);

//   try {
//     const response = await axios.post(`${API_URL}/send-otp`, {phoneNumber});
//     console.log(response);

//     return response.data;
//   } catch (error: any) {
//     console.log('error:', error);
//   }
// };

// export const verifyCode = async (phoneNumber: string, code: string) => {
//   try {
//     const response = await axios.post(`${API_URL}/verify-otp`, {
//       phoneNumber,
//       code,
//     });
//     return response.data;
//   } catch (error: any) {
//     throw new Error(error.response?.data?.msg || 'An error occurred');
//   }
// };

import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/auth';

//emulator
// const API_URL = 'http://10.0.2.2:5000/api/auth';

const API_URL = 'http://192.168.29.77:5000/api/auth';

interface ApiResponse {
  success?: boolean;
  message?: string;
  data?: any; // Adjust this based on actual response structure
}

export const sendVerificationCode = async (
  phoneNumber: string,
): Promise<ApiResponse> => {
  console.log(phoneNumber);

  try {
    const response = await axios.post<ApiResponse>(`${API_URL}/send-otp`, {
      phoneNumber,
    });
    console.log(response);

    return response.data;
  } catch (error: any) {
    console.error('Error sending verification code:', error);
    throw new Error(
      error.response?.data?.msg || 'Failed to send verification code',
    );
  }
};

export const verifyCode = async (
  phoneNumber: string,
  verificationCode: string,
): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(`${API_URL}/verify-otp`, {
      phoneNumber,
      verificationCode,
    });
    return response.data;
  } catch (error: any) {
    console.error('Error verifying code:', error);
    throw new Error(error.response?.data?.msg || 'Failed to verify code');
  }
};

export const handleUserUpdate = async (
  phoneNumber: string,
  firstName: string,
  lastName: string,
): Promise<ApiResponse> => {
  try {
    console.log(phoneNumber, firstName, lastName);

    const response = await axios.patch<ApiResponse>(`${API_URL}/update-user`, {
      phoneNumber,
      firstName,
      lastName,
    });
    return response.data;
  } catch (error: any) {
    console.error('user updating error', error);
    throw new Error(error.response?.data?.msg);
  }
};

export const handleGetAllUsers = async (
  userId: string,
): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(`${API_URL}/users`, {
      params: {userId},
    });
    return response.data;
  } catch (error: any) {
    console.error('get all users error', error);
    throw new Error(error.response?.data?.msg);
  }
};

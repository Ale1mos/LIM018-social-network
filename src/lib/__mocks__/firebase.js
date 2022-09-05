export const signInWithEmailPassword = jest.fn(() => Promise.resolve({ user: { uid: '123' } }));

// export const createUserWithEmailPassword = jest.fn(() => Promise.resolve({ user: { uid: '1234' } }));

// export const userCollection = jest.fn();

// export function registerUser(email, password) {
//     if (email === 'arkelly.perez.alayo@gmail.com' && password === '123456') {
//       return Promise.resolve({
//         user: {
//           uid: 'abc123',
//           username: 'arkelly perez alayo',
//           photoURL: '',
//         },
//       });
//     }
  
//     return Promise.reject(new Error());
//   }

// export const userCollection = jest.fn();

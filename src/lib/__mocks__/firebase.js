export const signInWithEmailPassword = jest.fn(() => {
    return Promise.resolve({ user: { uid: '123' } });
});

// export const singGoogle = jest.fn(() => {
//     return Promise.resolve({user:})
// })
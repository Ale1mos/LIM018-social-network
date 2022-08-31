export const signInWithEmailPassword = jest.fn(() => {
    return Promise.resolve({ user: { uid: '123' } });
});

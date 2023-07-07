interface Usertype {
    id: string;
    username: string;
    password: string;
    email: string;
}

export const Users = [
    {
        id: 1,
        username: 'brian',
        password: '12345678',
        email: 'brian@gmail.com',
    },
    {
        id: 2,
        username: 'username',
        password: 'password123',
        email: 'username@gmail.com',
    }
];

export type { Usertype };

export default function signin(username: string, password: string) {
    return new Promise((resolve) => {
        const User = Users.find(
            (user) => user.username === username && user.password === password
        )

        setTimeout(() => {
            if (User) {
                resolve(User)
            } else {
                return resolve({ msg: "Incorrect password", status: false });
            }
        }, 1000)
    })
}

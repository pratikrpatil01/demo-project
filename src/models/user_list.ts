export type UserStatus = 'active' | 'pending' | 'inactive';

export interface UserList {
    id: string;
    status: UserStatus;
    email: string
    name: string,
    place: string,
    type: string,
}

export type UserStatus = 'active' | 'pending' | 'inactive';

export interface UserList {
    id: string;
    status: UserStatus;
    name: string,
    place: string,
    type: string,
}

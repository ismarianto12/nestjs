export class CreateUserDto {
    username: string;
    email: string;
    // ... other properties
}

export class UpdateUserDto {
    username?: string;
    email?: string;
    // ... other properties
}

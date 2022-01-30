export interface RegisterRequest {
    username: string | null;
    email: string | null;
    password: string | null;
}

export interface RegisterResponse extends RegisterRequest {
    valid: boolean;
}

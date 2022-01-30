export interface LoginRequest {
    username: string | null;
    password: string | null;
}

export interface LoginResponse extends LoginRequest {
    valid: boolean;
}

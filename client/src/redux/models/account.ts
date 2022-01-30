export interface PublicAccountData {
    username: string | null;
    realName?: string;
}

export interface PrivateAccountData {
    password: string | null;
    email: string | null; 
}

export interface AccountData {
    public: PublicAccountData;
    private: PrivateAccountData;
}

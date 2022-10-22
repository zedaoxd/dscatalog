import jwtDecode from 'jwt-decode';
import { getAuthData } from './storage';

export type Role = "ROLE_OPERATOR" | "ROLE_ADMIN";

export type TokenData = {
    exp: number;
    user_name: string;
    authorities: Role[];
};

export const getTokenData = () : TokenData | undefined => {
    try {
        return jwtDecode(getAuthData().access_token) as TokenData;
    } catch (error) {
        return undefined;
    }
};

export const isAuthenticated = () : boolean => {
    const tokenData = getTokenData();

    return (tokenData && tokenData?.exp * 1_000 > Date.now()) ? true : false;
};

export const hasAnyRoles = (roles: Role[]): boolean => {

    if (roles.length === 0) return true;
    
    const tokenData = getTokenData();

    if (tokenData !== undefined) 
        return roles.some(r => tokenData.authorities.includes(r));
    
    return false;
};


package com.dscatalog.dto;

import com.dscatalog.services.validation.UserInsertValid;

@UserInsertValid
public class UserInsertDTO extends UserDTO{

    private String password;

    public String getPassword() {
        return password;
    }
}

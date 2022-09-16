package com.dscatalog.dto;

import com.dscatalog.services.validation.UserInsertValid;
import lombok.Data;
import lombok.NoArgsConstructor;

@UserInsertValid
@NoArgsConstructor
@Data
public class UserInsertDTO extends UserDTO{

    private String password;

}

package com.dscatalog.dto;

import com.dscatalog.entities.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@EqualsAndHashCode
@AllArgsConstructor
public class RoleDTO implements Serializable {
    private Long id;
    private String authority;

    public RoleDTO(Role entity) {
        this(entity.getId(), entity.getAuthority());
    }
}

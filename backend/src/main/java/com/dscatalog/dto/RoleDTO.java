package com.dscatalog.dto;

import com.dscatalog.entities.Role;

import java.io.Serializable;
import java.util.Objects;


public class RoleDTO implements Serializable {
    private Long id;
    private String authority;

    public RoleDTO() {
    }

    public RoleDTO(Long id, String authority) {
        this.id = id;
        this.authority = authority;
    }

    public RoleDTO(Role entity) {
        this(entity.getId(), entity.getAuthority());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RoleDTO roleDTO = (RoleDTO) o;
        return id.equals(roleDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

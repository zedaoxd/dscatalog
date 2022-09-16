package com.dscatalog.dto;

import com.dscatalog.entities.User;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@EqualsAndHashCode
public class UserDTO implements Serializable {
    private Long id;
    @NotBlank(message = "Campo obrigatório")
    private String firstName;
    private String lastName;
    @Email(message = "Favor entrar com um e-mail válido")
    private String email;
    @Setter(AccessLevel.NONE)
    private Set<RoleDTO> roles = new HashSet<>();

    public UserDTO(Long id, String firstName, String lastName, String email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public UserDTO(User entity) {
        this(entity.getId(), entity.getFirstName(), entity.getLastName(), entity.getEmail());
        entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
    }
}

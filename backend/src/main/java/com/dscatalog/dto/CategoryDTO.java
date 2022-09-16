package com.dscatalog.dto;

import com.dscatalog.entities.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@EqualsAndHashCode
@AllArgsConstructor
public class CategoryDTO implements Serializable {
    private Long id;
    private String name;

    public CategoryDTO(Category entity) {
        this(entity.getId(), entity.getName());
    }
}

package com.dscatalog.dto;

import com.dscatalog.entities.Category;
import com.dscatalog.entities.Product;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Data
@NoArgsConstructor
@EqualsAndHashCode
public class ProductDTO implements Serializable {

    private Long id;
    @Size(min = 5, max = 60, message = "Nome deve ter entre 5 e 60 caracteres")
    @NotBlank(message = "[Nome] não pode estar vazio")
    private String name;
    private String description;
    @Positive(message = "Preço deve ser um valor positivo")
    private Double price;
    private String imgUrl;
    @PastOrPresent(message = "A data do produto não pode ser futura")
    private Instant date;
    @Setter(AccessLevel.NONE)
    List<CategoryDTO> categories = new ArrayList<>();

    public ProductDTO(Long id, String name, String description, Double price, String imgUrl, Instant date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
        this.date = date;
    }

    public ProductDTO(Product entity) {
        this(entity.getId(), entity.getName(), entity.getDescription(),entity.getPrice(),entity.getImgUrl(), entity.getDate());
    }

    public ProductDTO(Product entity, Set<Category> categories) {
        this(entity);
        categories.forEach(c -> this.categories.add(new CategoryDTO(c)));
    }
}

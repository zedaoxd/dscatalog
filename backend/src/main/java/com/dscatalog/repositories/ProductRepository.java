package com.dscatalog.repositories;

import com.dscatalog.entities.Category;
import com.dscatalog.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "SELECT DISTINCT prod FROM Product prod " +
            "INNER JOIN prod.categories cats " +
            // need coalesce COALESCE(:categories, NULL) to work on postgres but with it gives error on h2
            "WHERE (:categories IS NULL OR cats IN :categories) " +
            "AND (UPPER(prod.name) LIKE UPPER(CONCAT('%', :name, '%')))")
    Page<Product> find(@Param("categories") List<Category> categories,
                       @Param("name") String name,
                       Pageable pageable);

    @Query(value = "SELECT prod FROM Product prod JOIN FETCH prod.categories WHERE prod IN :products")
    List<Product> findProductWithCategories(@Param("products") List<Product> products);
}

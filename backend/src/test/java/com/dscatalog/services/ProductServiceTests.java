package com.dscatalog.services;

import com.dscatalog.dto.ProductDTO;
import com.dscatalog.entities.Category;
import com.dscatalog.entities.Product;
import com.dscatalog.repositories.CategoryRepository;
import com.dscatalog.repositories.ProductRepository;
import com.dscatalog.services.exceptions.DatabaseException;
import com.dscatalog.services.exceptions.ResourceNotFoundException;
import com.dscatalog.tests.Factory;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;

@ExtendWith(SpringExtension.class)
public class ProductServiceTests {

    @InjectMocks
    private ProductService service;
    @Mock
    private ProductRepository repository;
    @Mock
    private CategoryRepository categoryRepository;

    private long existingId;
    private long nonExistsId;
    private long dependentId;
    private PageImpl<Product> page;
    private Product product;
    private Category category;

    @BeforeEach
    void setup() throws Exception {
        existingId = 1L;
        nonExistsId = -1L;
        dependentId = 4L;
        product = Factory.createProduct();
        category = Factory.createCategory();
        page = new PageImpl<>(List.of(product));

        // Not void methods
        Mockito.when(repository.findAll((Pageable) any())).thenReturn(page);
        Mockito.when(repository.save(any())).thenReturn(product);
        Mockito.when(repository.findById(existingId)).thenReturn(Optional.of(product));
        Mockito.when(repository.findById(nonExistsId)).thenReturn(Optional.empty());
        Mockito.when(repository.getReferenceById(existingId)).thenReturn(product);
        Mockito.when(repository.getReferenceById(nonExistsId)).thenThrow(EntityNotFoundException.class);
        Mockito.when(repository.find(any(), any(), any())).thenReturn(page);

        Mockito.when(categoryRepository.getReferenceById(existingId)).thenReturn(category);
        Mockito.when(categoryRepository.getReferenceById(nonExistsId)).thenThrow(EntityNotFoundException.class);

        // Void methods
        Mockito.doNothing().when(repository).deleteById(existingId);
        Mockito.doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(nonExistsId);
        Mockito.doThrow(DataIntegrityViolationException.class).when(repository).deleteById(dependentId);
    }

    @Test
    public void updateShouldThrowsResourceNotFoundWhenIdNotExists() {
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
           service.update(nonExistsId, Factory.createProductDTO());
        });
        Mockito.verify(repository, Mockito.times(1)).getReferenceById(nonExistsId);
    }

    @Test
    public void updateShouldReturnProductDTOWhenIdExists() {
        ProductDTO dto = service.update(existingId, Factory.createProductDTO());

        Assertions.assertNotNull(dto);
        Mockito.verify(repository, Mockito.times(1)).getReferenceById(existingId);
    }

    @Test
    public void findByIdShouldThrowResourceNotFoundExceptionWhenIdNotExists() {
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
           service.findById(nonExistsId);
        });
        Mockito.verify(repository, Mockito.times(1)).findById(nonExistsId);
    }

    @Test
    public void findByIdShouldReturnProductDTOWhenIdExists() {
        ProductDTO dto = service.findById(existingId);

        Assertions.assertNotNull(dto);
        Mockito.verify(repository, Mockito.times(1)).findById(existingId);
    }

    @Test
    public void findAllPageShouldReturnPage() {
        Pageable pageable = PageRequest.of(0, 10);
        Page<ProductDTO> result = service.findAllPage(pageable, 0L, "");

        Assertions.assertNotNull(result);
    }

    @Test
    public void deleteShouldDoNothingWhenIdExists() {
        Assertions.assertDoesNotThrow(() -> service.delete(existingId));
        Mockito.verify(repository, Mockito.times(1)).deleteById(existingId);
    }

    @Test
    public void deleteShouldThrowResourceNotFoundWhenIdNotExists() {
        Assertions.assertThrows(ResourceNotFoundException.class, () -> service.delete(nonExistsId));
        Mockito.verify(repository, Mockito.times(1)).deleteById(nonExistsId);
    }

    @Test
    public void deleteShouldThrowDataIntegrityExceptionWhenDependentId() {
        Assertions.assertThrows(DatabaseException.class, () -> service.delete(dependentId));
        Mockito.verify(repository, Mockito.times(1)).deleteById(dependentId);
    }

}

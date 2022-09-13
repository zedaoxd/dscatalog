package com.dscatalog.services;

import com.dscatalog.repositories.ProductRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
public class ProductServiceTests {

    @InjectMocks
    private ProductService service;
    @Mock
    private ProductRepository repository;

    private long existingId;
    private long nonExistsId;

    @BeforeEach
    void setup() throws Exception {
        existingId = 1L;
        nonExistsId = -1L;
        Mockito.doNothing().when(repository).deleteById(existingId);
        Mockito.doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(nonExistsId);
    }

    @Test
    public void deleteShouldDoNothingWhenIdExists() {
        Assertions.assertDoesNotThrow(() -> service.delete(existingId));
        Mockito.verify(repository, Mockito.times(1)).deleteById(existingId);
    }

}

package com.dscatalog.resources;

import com.dscatalog.dto.ProductDTO;
import com.dscatalog.services.ProductService;
import com.dscatalog.tests.Factory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.PageImpl;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ProductResource.class)
public class ProductResourceTests {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private ProductService service;

    private PageImpl<ProductDTO> page;
    private ProductDTO productDTO;

    @BeforeEach
    void setup() throws Exception {
        productDTO = Factory.createProductDTO();
        page = new PageImpl<>(List.of(productDTO));

        when(service.findAllPage(any())).thenReturn(page);
    }

    @Test
    public void findAllShouldReturnPage() throws Exception {
        mockMvc.perform(get("/products")).andExpect(status().isOk());
    }
}

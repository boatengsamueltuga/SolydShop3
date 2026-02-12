// ProductService (parse Strings to ints)
package com.ecommerce.sb_ecom.service;

import com.ecommerce.sb_ecom.payload.ProductDTO;
import com.ecommerce.sb_ecom.payload.ProductResponse;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

public interface ProductService {

    ProductDTO addProduct(Long categoryId, ProductDTO productDTO);

    // --------------------- PRODUCT LISTING ---------------------
    // Main endpoint used by frontend (keyword & category optional)
    ProductResponse getAllProducts(Integer pageNumber,
                                   Integer pageSize,
                                   String sortBy,
                                   String sortOrder);

    // Overload version with filters (backend usage)
    ProductResponse getAllProducts(Integer pageNumber,
                                   Integer pageSize,
                                   String sortBy,
                                   String sortOrder,
                                   String keyword,
                                   String category);

    // --------------------- CATEGORY SEARCH ---------------------
    ProductResponse searchByCategory(Long categoryId);
    ProductResponse searchByCategory(Long categoryId, int page, int size, String sortBy, String sortDir);

    // --------------------- KEYWORD SEARCH ----------------------
    ProductResponse searchProductByKeyword(String keyword);
    ProductResponse searchProductByKeyword(String keyword, int page, int size, String sortBy, String sortDir);

    // --------------------- MANAGE PRODUCT ----------------------
    ProductDTO updateProduct(Long productId, ProductDTO product);
    ProductDTO deleteProduct(Long productId);
    ProductDTO updateProductImage(Long productId, MultipartFile image) throws IOException;

    ProductResponse getAllProductsForAdmin(Integer pageNumber, Integer pageSize, String sortBy, String sortOrder);

    ProductResponse getAllProductsForSeller(Integer pageNumber, Integer pageSize, String sortBy, String sortOrder);


}


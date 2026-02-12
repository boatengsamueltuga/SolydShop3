//package com.ecommerce.sb_ecom.repositories;
//
//import com.ecommerce.sb_ecom.model.Category;
//import com.ecommerce.sb_ecom.model.Product;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
//@Repository
//public interface ProductRepository extends JpaRepository<Product,Long> {
//
//    List<Product> findByCategoryOrderByPriceAsc(Category category);
//
//    List<Product> findByProductNameLikeIgnoreCase(String keyword);
//}
package com.ecommerce.sb_ecom.repositories;

import com.ecommerce.sb_ecom.model.Category;
import com.ecommerce.sb_ecom.model.Product;
import com.ecommerce.sb_ecom.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {

    // Old non-paged version (you can keep if still used)
    // List<Product> findByCategoryOrderByPriceAsc(Category category);

    // New paged + sortable version
    Page<Product> findByCategory(Category category, Pageable pageable);

    // Old non-paged version
    // List<Product> findByProductNameLikeIgnoreCase(String keyword);

    // New paged + sortable version
    Page<Product> findByProductNameContainingIgnoreCase(String keyword, Pageable pageable);

    Page<Product> findByUser(User user, Pageable pageDetails);
}

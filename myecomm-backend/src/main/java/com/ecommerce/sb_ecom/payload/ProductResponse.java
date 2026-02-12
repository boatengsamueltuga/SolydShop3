//package com.ecommerce.sb_ecom.payload;
//
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.util.List;
//
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//public class ProductResponse {
//
//    private List<ProductDTO> content;
//}
package com.ecommerce.sb_ecom.payload;

import lombok.Data;
import java.util.List;

@Data
public class ProductResponse {
    private List<ProductDTO> content;

    private int pageNumber;       // page.getNumber()
    private int pageSize;         // page.getSize()
    private long totalElements;   // page.getTotalElements() <-- long
    private int totalPages;       // page.getTotalPages()
    private boolean lastPage;     // page.isLast()

    private String sortBy;        // for echoing sort info
    private String sortDir;
}

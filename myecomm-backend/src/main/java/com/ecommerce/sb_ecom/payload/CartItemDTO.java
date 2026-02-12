package com.ecommerce.sb_ecom.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartItemDTO {
    //Initial State before adding the createOrUpdateCart in the CartController
//    private Long cartItemId;
//    private CartDTO cart;
//    private ProductDTO productDTO;
//    private Integer quantity;
//    private Double discount;
//    private Double productPrice;

    private Long productId;
    private Integer quantity;


}

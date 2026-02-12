//package com.ecommerce.sb_ecom.model;
//
//import com.ecommerce.sb_ecom.payload.CartDTO;
//import com.ecommerce.sb_ecom.payload.ProductDTO;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Entity
//@Data
//@Table(name = "cart_items")
//@NoArgsConstructor
//@AllArgsConstructor
//public class CartItem {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long cartItemId;
//
//    //Owning side of the relationship with cart
//    @ManyToOne
//    @JoinColumn(name = "cart_id")
//    private Cart cart;
//
//    @ManyToOne
//    @JoinColumn(name = "product_id")
//    private Product product;
//
//    private Integer quantity;
//    private double discount;
//    private double productPrice;
//
//}


package com.ecommerce.sb_ecom.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "cart_items")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(exclude = {"cart", "product"})
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long cartItemId;

    // Owning side of the relationship with cart
    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private Integer quantity;
    private double discount;
    private double productPrice;
}

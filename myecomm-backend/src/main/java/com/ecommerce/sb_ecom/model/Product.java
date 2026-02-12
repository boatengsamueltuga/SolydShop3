//package com.ecommerce.sb_ecom.model;
//
//import jakarta.persistence.*;
//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.Size;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import lombok.ToString;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Table(name = "products")
//@ToString
//public class Product {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long productId;
//    @NotBlank
//    @Size(min = 3, message = "Product name must contain atleast 3 characters")
//    private String productName;
//    private String image;
//
//    @Size(min = 3, message = "Product description must contain atleast 6 characters")
//    private String description;
//    private Integer quantity;
//    private double price;//100
//    private double discount;//25
//    private double specialPrice;//75
//
//    @ManyToOne
//    @JoinColumn(name = "category_id")
//    private Category category;
//
//    @ManyToOne
//    @JoinColumn(name = "seller_id")
//    private User user;
//
//    @OneToMany(mappedBy = "product", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, orphanRemoval = true)
//    private List<CartItem> products = new ArrayList<>();
//
//}

package com.ecommerce.sb_ecom.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(exclude = {"category", "user", "products"})
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @EqualsAndHashCode.Include
    private Long productId;

    @NotBlank
    @Size(min = 3, message = "Product name must contain atleast 3 characters")
    private String productName;

    private String image;

    @Size(min = 3, message = "Product description must contain atleast 6 characters")
    private String description;

    private Integer quantity;
    private double price;        // 100
    private double discount;     // 25
    private double specialPrice; // 75

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    private User user;

    @OneToMany(
            mappedBy = "product",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE},
            orphanRemoval = true
    )
    private List<CartItem> products = new ArrayList<>();
}

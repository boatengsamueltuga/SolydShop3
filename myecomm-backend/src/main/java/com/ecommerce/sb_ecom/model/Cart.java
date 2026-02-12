//package com.ecommerce.sb_ecom.model;
//
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Data
//@Table(name = "carts")
//@NoArgsConstructor
//@AllArgsConstructor
//public class Cart {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long cartId;
//
//   //Relationship between the Cart and the User
//    @OneToOne
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    //This shows one cart can have many items
//    @OneToMany(mappedBy = "cart", cascade = {CascadeType.PERSIST, CascadeType.MERGE,CascadeType.REMOVE}, orphanRemoval = true)
//    private List<CartItem> cartItems = new ArrayList<>();
//
//    private Double totalPrice  = 0.0;
//}

package com.ecommerce.sb_ecom.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "carts")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(exclude = {"user", "cartItems"})
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long cartId;

    // Relationship between the Cart and the User
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    // One cart can have many items
    @OneToMany(
            mappedBy = "cart",
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE,
                    CascadeType.REMOVE
            },
            orphanRemoval = true
    )
    private List<CartItem> cartItems = new ArrayList<>();

    private Double totalPrice = 0.0;
}

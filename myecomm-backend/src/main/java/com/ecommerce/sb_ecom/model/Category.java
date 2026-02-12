//package com.ecommerce.sb_ecom.model;
//
//import jakarta.persistence.*;
//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.Size;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.util.List;
//
//@Entity(name = "categories")
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//public class Category {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long categoryId;
//
//    @NotBlank
//    //Custom Message
//    @Size(min = 5, message = "Category must contain at least 5 Characters" )
//    //@Size(min = 5)  This is the default Message
//    private String categoryName;
//
//    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
//    private List<Product> products;
//
//}
package com.ecommerce.sb_ecom.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.List;

@Entity(name = "categories")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(exclude = {"products"})
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long categoryId;

    @NotBlank
    @Size(min = 5, message = "Category must contain at least 5 Characters")
    private String categoryName;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Product> products;
}

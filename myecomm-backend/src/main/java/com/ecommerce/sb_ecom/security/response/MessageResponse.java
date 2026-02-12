package com.ecommerce.sb_ecom.security.response;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Data
public class MessageResponse {
    private String message;

    public MessageResponse(String message) {
        this.message = message;
    }

}

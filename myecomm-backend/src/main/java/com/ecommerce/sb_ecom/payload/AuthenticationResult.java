package com.ecommerce.sb_ecom.payload;

import com.ecommerce.sb_ecom.security.response.UserInfoResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.ResponseCookie;

//This class is for communication between controller and Service
@Data
@AllArgsConstructor
public class AuthenticationResult {
    private final UserInfoResponse response;
    private final ResponseCookie jwtCookie;

}

package com.ecommerce.sb_ecom.controller;

import com.ecommerce.sb_ecom.config.AppConstants;
import com.ecommerce.sb_ecom.payload.AuthenticationResult;
import com.ecommerce.sb_ecom.security.request.LoginRequest;
import com.ecommerce.sb_ecom.security.request.SignupRequest;
import com.ecommerce.sb_ecom.security.response.MessageResponse;
import com.ecommerce.sb_ecom.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {


    @Autowired
    AuthService authService;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        try {
            AuthenticationResult result = authService.login(loginRequest);
            return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE,
                    result.getJwtCookie().toString())
                    .body(result.getResponse());
        } catch (AuthenticationException e) {
            return ResponseEntity.status(401)
                    .body(new MessageResponse("Bad credentials: Invalid username or password"));
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body(new MessageResponse("Login error: " + e.getClass().getSimpleName() + " - " + e.getMessage()));
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signupRequest) {
       return  authService.registerUser(signupRequest);
    }

    @GetMapping("/username")
    public String currentUserName(Authentication authentication){
        if(authentication != null)
            return authentication.getName();
        else
            return "";
    }
    @GetMapping("/user")
    public ResponseEntity<?> getUserDetails(Authentication authentication){


        return ResponseEntity.ok().body(authService.getCurrentUserDetails(authentication));

    }
    //This method invalidates cookies
    @PostMapping("signout")
            public ResponseEntity<?> signoutUser(){
        ResponseCookie cookie  = authService.logoutUser();
            return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE,
                            cookie.toString())
                    .body(new MessageResponse("You have been signed out!"));

    }
    @GetMapping("/sellers")
    public ResponseEntity<?> getAllSellers(
            @RequestParam(name= "pageNumber", defaultValue = AppConstants.PAGE_NUMBER, required = false) Integer pageNumber
    ){
        Sort sortByAndOrder = Sort.by(AppConstants.SORT_USERS_BY).descending();
        Pageable pageDetails = PageRequest.of(pageNumber,Integer.parseInt(AppConstants.PAGE_SIZE),sortByAndOrder);
        return  ResponseEntity.ok(authService.getAllSellers(pageDetails));
    }
}

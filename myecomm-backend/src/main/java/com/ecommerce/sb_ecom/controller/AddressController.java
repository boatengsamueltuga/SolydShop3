package com.ecommerce.sb_ecom.controller;

import com.ecommerce.sb_ecom.model.User;
import com.ecommerce.sb_ecom.payload.AddressDTO;
import com.ecommerce.sb_ecom.service.AddressService;
import com.ecommerce.sb_ecom.util.AuthUtil;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AddressController {

    @Autowired
    private AddressService addressService;
    @Autowired
    private AuthUtil authUtil;

    @PostMapping("/addresses")
    public ResponseEntity<AddressDTO> createAddress(@Valid @RequestBody AddressDTO addressDTO){
        User user = authUtil.loggedInUser();
        AddressDTO savedAddressDTO = addressService.createAddress(addressDTO , user);

        return new ResponseEntity<>(savedAddressDTO, HttpStatus.CREATED);
    }
    //Getting All Addresses
    @GetMapping("/addresses")
    public ResponseEntity<List<AddressDTO>> getAddress(){
        List<AddressDTO> addressDTOList = addressService.getAddress();
     return  new ResponseEntity<>(addressDTOList, HttpStatus.OK);
    }
    //Getting Specific Address
    @GetMapping("/addresses/{addressId}")
    public ResponseEntity<AddressDTO> getAddressById(@PathVariable Long addressId){
        AddressDTO addressDTO = addressService.getAddressById(addressId);
        return  new ResponseEntity<>(addressDTO, HttpStatus.OK);
    }
    //Getting user addresses
    @GetMapping("/users/addresses")
    public ResponseEntity<List<AddressDTO>> getUserAddress(){
        User user = authUtil.loggedInUser();
        List<AddressDTO> addressDTOList = addressService.getUserAddress(user);
        return  new ResponseEntity<>(addressDTOList, HttpStatus.OK);
    }

    //Updating addresses byId
    @PutMapping("/addresses/{addressId}")
    public ResponseEntity<AddressDTO>  updateAddress(@PathVariable Long addressId
            , @RequestBody AddressDTO addressDTO){
        AddressDTO address = addressService.updateAddress(addressId, addressDTO);
        return  new ResponseEntity<>(address, HttpStatus.OK);
    }

    @DeleteMapping("/addresses/{addressId}")
    public ResponseEntity<String> deleteAddress(@PathVariable Long addressId){
        String status = addressService.deleteAddress(addressId);
        return new ResponseEntity<>(status, HttpStatus.OK);
    }
}

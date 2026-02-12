package com.ecommerce.sb_ecom.service;

import com.ecommerce.sb_ecom.model.Address;
import com.ecommerce.sb_ecom.model.User;
import com.ecommerce.sb_ecom.payload.AddressDTO;
import com.ecommerce.sb_ecom.projectexceptions.ResourceNotFoundException;
import com.ecommerce.sb_ecom.repositories.AddressRepository;
import com.ecommerce.sb_ecom.repositories.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AddressServiceImpl  implements AddressService{

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    AddressRepository addressRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public AddressDTO createAddress(AddressDTO addressDTO, User user) {

        Address address = modelMapper.map(addressDTO, Address.class);
        List<Address> addressList = user.getAddresses();
        addressList.add(address);
        user.setAddresses(addressList);

        //Adding user to address
        address.setUser(user);
        Address savedAddress = addressRepository.save(address);
        return  modelMapper.map(savedAddress, AddressDTO.class);
    }

    @Override
    public List<AddressDTO> getAddress() {
        List<Address> addresses = addressRepository.findAll();
        return addresses.stream()
                .map(address -> modelMapper.map(address,AddressDTO.class))
                .toList();
    }

    @Override
    public AddressDTO getAddressById(Long addressId) {
        Address address = addressRepository.findById(addressId)
                .orElseThrow(()-> new ResourceNotFoundException("Address", "addressId", addressId));
        return modelMapper.map(address, AddressDTO.class);
    }

    @Override
    public List<AddressDTO> getUserAddress(User user) {

        List<Address> addresses = user.getAddresses();
        return addresses.stream()
                .map(address -> modelMapper.map(address,AddressDTO.class))
                .toList();

    }

    @Override
    public AddressDTO updateAddress(Long addressId, AddressDTO addressDTO) {

        //Get User ById from Database
        Address addressFromDb = addressRepository.findById(addressId)
                .orElseThrow(() ->new ResourceNotFoundException("Address", "addressId", addressId));
         //we updated it with information received from the user
        addressFromDb.setCity(addressDTO.getCity());
        addressFromDb.setZipcode(addressDTO.getZipcode());
        addressFromDb.setState(addressDTO.getState());
        addressFromDb.setCountry(addressDTO.getCountry());
        addressFromDb.setStreet(addressDTO.getStreet());
        addressFromDb.setBuildingName(addressDTO.getBuildingName());

        // we save it in the database
        Address updatedAddress = addressRepository.save(addressFromDb);
        //We updated it in the userDatabase and saved it
        User user = addressFromDb.getUser();
        user.getAddresses().removeIf(address -> address.getAddressId().equals(addressId));
        user.getAddresses().add(updatedAddress);
        userRepository.save(user);

        return modelMapper.map(updatedAddress, AddressDTO.class);
    }

    @Override
    public String deleteAddress(Long addressId) {
        Address addressFromDb = addressRepository.findById(addressId)
                .orElseThrow(() ->new ResourceNotFoundException("Address", "addressId", addressId));
        User user =  addressFromDb.getUser();
        user.getAddresses().removeIf(address -> address.getAddressId().equals(addressId));
        userRepository.save(user);
        addressRepository.delete(addressFromDb);
        return "Address deleted successfully with addressId: " + addressId;
    }


}

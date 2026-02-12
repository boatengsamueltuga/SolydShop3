package com.ecommerce.sb_ecom.service;


import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileService {

    //Code from search that stores directory in the project inside the resources folder
    String uploadImage(String dir, MultipartFile file) throws IOException;
}

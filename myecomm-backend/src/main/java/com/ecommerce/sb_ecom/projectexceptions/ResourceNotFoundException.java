//package com.ecommerce.sb_ecom.projectexceptions;
//
//public class ResourceNotFoundException extends RuntimeException{
//    String resourceName;
//    String field;
//    String fieldName;
//    Long fieldId;
//
//    public ResourceNotFoundException() {
//    }
//
//    public ResourceNotFoundException(String resourceName, String field, String fieldName) {
//        super(String.format("%s not Found with %s:", resourceName, field, fieldName));
//        this.resourceName = resourceName;
//        this.field = field;
//        this.fieldName = fieldName;
//    }
//
//    public ResourceNotFoundException(String resourceName, String field, Long fieldId) {
//        super(String.format("%s not Found with %d:", resourceName, field, fieldId));
//        this.resourceName = resourceName;
//        this.field = field;
//        this.fieldId = fieldId;
//    }
//}
package com.ecommerce.sb_ecom.projectexceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    private final String resourceName;
    private final String fieldName;
    private final Object fieldValue;

    public ResourceNotFoundException(String resourceName, String fieldName, Object fieldValue) {
        super(String.format("%s not found with %s: %s", resourceName, fieldName, fieldValue));
        this.resourceName = resourceName;
        this.fieldName = fieldName;
        this.fieldValue = fieldValue;
    }

    public String getResourceName() { return resourceName; }
    public String getFieldName() { return fieldName; }
    public Object getFieldValue() { return fieldValue; }
}

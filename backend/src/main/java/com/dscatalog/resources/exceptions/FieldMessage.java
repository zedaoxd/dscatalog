package com.dscatalog.resources.exceptions;


import java.io.Serializable;
import java.util.Objects;

public class FieldMessage implements Serializable {

    private String fieldName;
    private String message;

    public FieldMessage() {
    }

    public FieldMessage(String fieldName, String message) {
        this.fieldName = fieldName;
        this.message = message;
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FieldMessage that = (FieldMessage) o;
        return fieldName.equals(that.fieldName) && message.equals(that.message);
    }

    @Override
    public int hashCode() {
        return Objects.hash(fieldName, message);
    }
}

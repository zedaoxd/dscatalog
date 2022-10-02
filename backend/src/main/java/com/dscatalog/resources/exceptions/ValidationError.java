package com.dscatalog.resources.exceptions;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class ValidationError extends StandardError {

    private List<FieldMessage> errors = new ArrayList<>();

    public void addError(String fieldName, String message) {
        errors.add(new FieldMessage(fieldName, message));
    }

    public ValidationError() {
    }

    public ValidationError(Instant timestamp, Integer status, String error, String message, String path, List<FieldMessage> errors) {
        super(timestamp, status, error, message, path);
        this.errors = errors;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        ValidationError that = (ValidationError) o;
        return errors.equals(that.errors);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), errors);
    }
}

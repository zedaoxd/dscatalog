package com.dscatalog.dto;

import java.io.Serializable;

public class UriDTO implements Serializable {

    private String uri;

    public UriDTO() {
    }

    public UriDTO(String uri) {
        this.uri = uri;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }
}

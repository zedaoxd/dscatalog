package com.dscatalog.services;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.UUID;

@Service
public class S3Service {

    @Autowired
    private AmazonS3 s3client;

    @Value("${s3.bucket}")
    private String bucketName;

    public URL uploadFile(MultipartFile file) {
        try {
            String originalName = file.getOriginalFilename();
            String extension = FilenameUtils.getExtension(originalName);
            String fileName = UUID.randomUUID() + "." + extension;

            InputStream is = file.getInputStream();
            String contentType = file.getContentType();

            return upload(is, fileName, contentType);
        }
        catch (IOException e) {
            throw new IllegalArgumentException(e.getMessage());
        }
    }

    private URL upload(InputStream is, String fileName, String contentType) {
        ObjectMetadata meta = new ObjectMetadata();
        meta.setContentType(contentType);
        s3client.putObject(bucketName, fileName, is, meta);
        return s3client.getUrl(bucketName, fileName);
    }
}

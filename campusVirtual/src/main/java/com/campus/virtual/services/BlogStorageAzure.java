package com.campus.virtual.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import com.campus.virtual.services.impl.AzureStorageParam;

public interface BlogStorageAzure {

	Object upload(MultipartFile file,String fileName,String nameContainer);
}

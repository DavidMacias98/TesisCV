package com.campus.virtual.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import com.campus.virtual.services.BlogStorageAzure;
import com.microsoft.azure.storage.CloudStorageAccount;
import com.microsoft.azure.storage.OperationContext;
import com.microsoft.azure.storage.blob.BlobContainerPublicAccessType;
import com.microsoft.azure.storage.blob.BlobRequestOptions;
import com.microsoft.azure.storage.blob.CloudBlobClient;
import com.microsoft.azure.storage.blob.CloudBlobContainer;
import com.microsoft.azure.storage.blob.CloudBlockBlob;



@Service
public class BlogStorageAzureImpl implements BlogStorageAzure {

	@Autowired
	private AzureStorageParam azureStorageParam;

	@Override
	public Object upload(MultipartFile file,String fileName,String nameContainer) {
		Object respuesta = null;
		try {
			CloudBlobContainer cloudBlobContainer = this.getAzureContainer(azureStorageParam.getStorageConnectionString(), nameContainer);
			 if(cloudBlobContainer == null) {
	                return "Error al obtener el contenedor";
	            }
			 CloudBlockBlob blob = cloudBlobContainer.getBlockBlobReference(fileName);
	            blob.getProperties().setContentType(file.getContentType());
	            blob.upload(file.getInputStream(), -1);
	            respuesta = blob.getUri().toString();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return respuesta;
	}

	public CloudBlobContainer getAzureContainer(String storageConnectionString, String containerReference) throws Exception {
	    CloudStorageAccount storageAccount;
	    CloudBlobClient blobClient;
	    CloudBlobContainer container = null;
	    try {
	        storageAccount = CloudStorageAccount.parse(storageConnectionString);
	        blobClient = storageAccount.createCloudBlobClient();
	        container = blobClient.getContainerReference(containerReference);
	        container.createIfNotExists(BlobContainerPublicAccessType.CONTAINER, new BlobRequestOptions(), new OperationContext());

	    } catch (Exception e) {
	    	throw new Exception("Error al obtener contendor blog de azure: ");
	    }
		return container;
	}
		


}

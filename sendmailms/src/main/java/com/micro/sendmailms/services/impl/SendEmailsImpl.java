package com.micro.sendmailms.services.impl;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import com.micro.sendmailms.emailConfig.EmailsList;
import com.micro.sendmailms.models.Replacers;
import com.micro.sendmailms.models.RequestAdvancedSendEmail;
import com.micro.sendmailms.models.Templates;
import com.micro.sendmailms.repository.TemplateRepo;
import com.micro.sendmailms.services.SendEmailServices;
import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;

import org.springframework.core.io.ClassPathResource;
import java.net.URL;
import java.io.BufferedReader;
import java.nio.charset.StandardCharsets;
import java.io.IOException;
import java.io.InputStreamReader;
@Service
public class SendEmailsImpl implements SendEmailServices{
	private static final Logger logger = LoggerFactory.getLogger(SendEmailsImpl.class);
	
	private EmailsList emailList;
	
	@Autowired
	private TemplateRepo repository;
	
	@Autowired
	private SendGrid sendGrid;
	
	 private String obtenerContenidoDesdeURL(String urlString) throws IOException {
	        URL url = new URL(urlString);
	        StringBuilder contenido = new StringBuilder();

	        try (BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream(), StandardCharsets.UTF_8))) {
	            String linea;
	            while ((linea = reader.readLine()) != null) {
	                contenido.append(linea);
	            }
	        }
	        return contenido.toString();
	    }
	
	
	@Override
	public String sendTextEmail(String toEmail, String idPlantilla)throws Exception {
		Email from = new Email(emailList.CORREO_INFO);
		Email to = new Email(toEmail);
		String contenidoPlantilla = null;
		Templates plantilla = new Templates();
		plantilla= this.repository.findById(idPlantilla).get();
		logger.info("plantilla descargada");
         // Leer el contenido de la URL
		String contenidoHtml = obtenerContenidoDesdeURL(plantilla.getUrlTemplate());
		//Content content = new Content("text/plain", cuerpoEmail);
		Content content = new Content("text/html", contenidoHtml);
		Mail mail = new Mail(from, plantilla.getAsunto(), to, content);
		Request request = new Request();
		try {
		  	request.setMethod(Method.POST);
		   	request.setEndpoint("mail/send");
		   	request.setBody(mail.build());
		   	Response response = sendGrid.api(request);
		   	logger.info("correo enviado");
		   	return response.getBody();
		} catch (IOException e) {
			logger.error(e.getMessage());
			return "error en envió de email";
		}	   
	}
	
	

	@Override
	public String AvancedSendEmail(RequestAdvancedSendEmail  request)throws Exception {
		Email from = new Email(emailList.CORREO_INFO);
		Email to = new Email(request.getToMail());
		String contenidoPlantilla = null;
		Templates plantilla = new Templates();
		plantilla= this.repository.findById(request.getIdPlantilla()).get();
		logger.info("plantilla descargada");
		String contenidoHtml = obtenerContenidoDesdeURL(plantilla.getUrlTemplate());
	
		for (Replacers item : request.getReplacers()) {
			logger.info("reemplanzando: "+ item.getKey()+" por "+ item.getValue());
			contenidoHtml=contenidoHtml.replace(item.getKey(), item.getValue());
		}
		
		Content content = new Content("text/html", contenidoHtml);
		Mail mail = new Mail(from, plantilla.getAsunto(), to, content);
		Request requestResult = new Request();
		try {
			requestResult.setMethod(Method.POST);
			requestResult.setEndpoint("mail/send");
			requestResult.setBody(mail.build());
		   	Response response = sendGrid.api(requestResult);
		   	logger.info("correo enviado a "+ request.getToMail());
		   	return response.getBody();
		} catch (IOException e) {
			logger.error(e.getMessage());
			return "error en envió de email";
		}	   
	}

}

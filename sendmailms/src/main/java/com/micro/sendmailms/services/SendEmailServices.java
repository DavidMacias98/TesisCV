package com.micro.sendmailms.services;

import java.util.HashMap;
import java.util.List;

import com.micro.sendmailms.models.Replacers;
import com.micro.sendmailms.models.RequestAdvancedSendEmail;

public interface SendEmailServices {
	
	
	String sendTextEmail(String toMail, String idPlantilla)throws Exception;
	
	String AvancedSendEmail(RequestAdvancedSendEmail request)throws Exception;
	
}

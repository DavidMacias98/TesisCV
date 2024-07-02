package com.micro.sendmailms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.micro.sendmailms.models.RequestAdvancedSendEmail;
import com.micro.sendmailms.services.SendEmailServices;

@RestController
@RequestMapping("${route.service.contextPath}")
public class SendEmailController {

		@Autowired
		private SendEmailServices sendMailService;
	
	@PostMapping("sendbyuri")
	public ResponseEntity<?> login(@RequestParam String toMail, @RequestParam String idPlantilla) throws Exception {
		Object response;
		try {
			response = this.sendMailService.sendTextEmail(toMail,idPlantilla  );
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		return ResponseEntity.ok().body(response);
	}
	
	@PostMapping("advancedsendbyuri")
	public ResponseEntity<?> login(@RequestBody RequestAdvancedSendEmail request) throws Exception {
		Object response;
		try {
			response = this.sendMailService.AvancedSendEmail(request);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		return ResponseEntity.ok().body(response);
	}
	
}

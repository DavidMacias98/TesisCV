package com.campus.virtual.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;


@Component
public class ServicesUtils {

	
	
	public ResponseEntity<?> validar(BindingResult result){
		Map<String, Object> errores = new HashMap<>();
		result.getFieldErrors().forEach(err -> {
			errores.put("error", " El campo "+err.getDefaultMessage());
		});
		
		
		return ResponseEntity.badRequest().body(errores);
	}
}

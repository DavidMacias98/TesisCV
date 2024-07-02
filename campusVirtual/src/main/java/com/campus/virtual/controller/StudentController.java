package com.campus.virtual.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.campus.virtual.models.BadResponse;
import com.campus.virtual.services.ActivityService;
import com.campus.virtual.services.AsistenciasService;

@RestController
public class StudentController {

	
	@Autowired
	private AsistenciasService asistenciaService;
	
	@Autowired
	private ActivityService activityService;
	
	
	@PostMapping("std/get/listaActivitys")
	public ResponseEntity<?> getListaAsistencia(@RequestParam String idStudent) throws Exception {
		Object response;
		try {
			response = this.activityService.getActivityDetByStudent(Long.parseLong(idStudent));
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	@PutMapping("std/put/ActivityFile")
	public ResponseEntity<?> putActivityFile(@RequestParam String idDetalle, MultipartFile file) throws Exception {
		Object response;
		try {
			response = this.activityService.putActivityByStudent(Long.parseLong(idDetalle),file);
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	@PostMapping("std/get/AssistsDetByStudent")
	public ResponseEntity<?> getDetalleByAssist(@RequestParam String idStudent) throws Exception {
		Object response;
		try {
			response = this.asistenciaService.getDetalleByStudent(Long.parseLong(idStudent));
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	
	
	
}

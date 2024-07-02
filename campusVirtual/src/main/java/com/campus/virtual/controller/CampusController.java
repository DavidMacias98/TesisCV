package com.campus.virtual.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.campus.virtual.models.BadResponse;
import com.campus.virtual.models.OrdenPago;
import com.campus.virtual.services.ActivityService;
import com.campus.virtual.services.AsistenciasService;
import com.campus.virtual.services.CuentaService;
import com.campus.virtual.services.PublicService;
import com.campus.virtual.services.RepresentanteService;


@RestController

public class CampusController {
	
	
	
	@Autowired
	private CuentaService cuentaService;
	@Autowired
	private PublicService publicService;
	@Autowired
	private RepresentanteService repreService;
	@Autowired
	private AsistenciasService asistenciaService;
	@Autowired
	private ActivityService activityService;

	

	//////////////////////////SERVICIOS DE REPRESENTANTE/////////////////////////////
	@PostMapping("representante/get/students")
	public ResponseEntity<?> getStudenByRepre(@RequestParam String idRepre) throws Exception {
		Object response;
		try {
			response = this.cuentaService.getStudentByRepre(Long.parseLong(idRepre));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(response);
	}
	@PostMapping("representante/get/studentsToMatricula")
	public ResponseEntity<?> getStudentByRepreToMatricula(@RequestParam String idRepre) throws Exception {
		Object response;
		try {
			response = this.cuentaService.getStudentByRepreToMatricula(Long.parseLong(idRepre));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(response);
	}
	
	
	@PutMapping("representante/put/orders")
	public ResponseEntity<?> putOrders(@RequestBody OrdenPago orden) throws Exception {
		Object response;
		try {
			response = this.repreService.addOrden(orden);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	@PostMapping("representante/get/orders")
	public ResponseEntity<?> getOrders(@RequestParam String idRepre) throws Exception {
		Object response;
		try {
			response = this.repreService.getAllOrdenes(Long.parseLong(idRepre));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	
	@PostMapping("representante/get/Por100AssistByStudent")
	public ResponseEntity<?> getPor100AssistByStudent(@RequestParam String idRepre) throws Exception {
		Object response;
		try {
			response = this.asistenciaService.getPorAsistenciaByRepre(Long.parseLong(idRepre));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(response);
	}
	
	
	@PostMapping("representante/get/calificaciones")
	public ResponseEntity<?> getCalifiaciones(@RequestParam String idStudent) throws Exception {
		Object response;
		try {
			response = this.repreService.getCalifiaciones(Long.parseLong(idStudent));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	
	@PostMapping("representante/get/listaActivitysFromRepresentante")
	public ResponseEntity<?> getListaActivitysFromRepresentante(@RequestParam String idStudent) throws Exception {
		Object response;
		try {
			response = this.activityService.getActivityDetByStudent(Long.parseLong(idStudent));
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	
	
}

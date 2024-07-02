package com.campus.virtual.controller;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.campus.virtual.dto.RequestActivity;
import com.campus.virtual.models.Activity;
import com.campus.virtual.models.BadResponse;
import com.campus.virtual.models.Response;
import com.campus.virtual.services.ActivityService;
import com.campus.virtual.services.AsistenciasService;
import com.campus.virtual.services.OrdenPagoService;
import com.campus.virtual.services.PublicService;

@RestController
public class DocenteController {
	
	@Autowired
	private OrdenPagoService  orderRepo;
	
	@Autowired
	private AsistenciasService asistenciaService;
	
	@Autowired
	private ActivityService activityService;
	
	
	
	@PostMapping("doc/get/listaAsistencia")
	public ResponseEntity<?> getListaAsistencia(@RequestParam String idCurso) throws Exception {
		Object response;
		try {
			response = this.asistenciaService.getAsistenciasByCurso(Long.parseLong(idCurso));
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	@PutMapping("doc/put/listaAsistencia")
	public ResponseEntity<?> putListaAsistencia(@RequestParam String idDocente) throws Exception {
		Object response;
		try {
			response = this.asistenciaService.putAsistencia(Long.parseLong(idDocente));
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	@PostMapping("doc/get/listaStudentXassists")
	public ResponseEntity<?> getListaStudentXassists(@RequestParam String idAssist) throws Exception {
		Object response;
		try {
			response = this.asistenciaService.getStudentXassistByCurso(Long.parseLong(idAssist));
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	
	@PostMapping("doc/get/detalleByAssist")
	public ResponseEntity<?> getDetalleByAssist(@RequestParam String idAssist) throws Exception {
		Object response;
		try {
			response = this.asistenciaService.getDetalleByAssist(Long.parseLong(idAssist));
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	
	@PutMapping("doc/put/detalleStatus")
	public ResponseEntity<?> putdetalleStatus(@RequestParam String idDetalle,@RequestParam String status ) throws Exception {
		Object response;
		try {
			response = this.asistenciaService.putDetallePresent(Long.parseLong(idDetalle), Boolean.parseBoolean(status));
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	
	///////////////////////////actividades///////////////
	
	
	@PutMapping("doc/put/Activity")
	public ResponseEntity<?> putActivity(@RequestBody RequestActivity activity) throws Exception {
		Object response;
		try {
			response = this.activityService.putActivity(activity);
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	@PutMapping("doc/put/ActivityFile")
	public ResponseEntity<?> putActivityFile(@RequestParam String idActivity, MultipartFile file) throws Exception {
		Object response;
		try {
			response = this.activityService.putActivityFile(Long.parseLong(idActivity),file);
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	
	@PostMapping("doc/get/activitys")
	public ResponseEntity<?> getActivitys(@RequestParam String idCurso) throws Exception {
		Object response;
		try {
			response = this.activityService.getActivityByCurso(Long.parseLong(idCurso));
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	@PostMapping("doc/get/activitysDetalles")
	public ResponseEntity<?> getActivitysDetalleByAssists(@RequestParam String idActivity) throws Exception {
		Object response;
		try {
			response = this.activityService.getActivityDetalleByActivity(Long.parseLong(idActivity));
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	@PutMapping("doc/put/calificarActivity")
	public ResponseEntity<?> putCalificarActivity(@RequestParam String idActDet,@RequestParam String calificacion) throws Exception {
		Object response;
		try {
			response = this.activityService.putCalificarActDet(Long.parseLong(idActDet),new BigDecimal(calificacion));
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

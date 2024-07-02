package com.campus.virtual.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.campus.virtual.models.BadResponse;
import com.campus.virtual.models.Materias;
import com.campus.virtual.models.Response;
import com.campus.virtual.models.WebUser;
import com.campus.virtual.services.PublicService;
import com.campus.virtual.services.ServicesUtils;

import ch.qos.logback.classic.Logger;

import com.campus.virtual.services.CuentaService;


@RestController

public class PublicController {
	
	
	
	@Autowired
	private CuentaService cuentaService; 

	@Autowired
	private PublicService  catalogoService;
	
	@Autowired
	private ServicesUtils utils;

	private Logger log;
	
	@PostMapping("public/logers")
	public ResponseEntity<?> login(@RequestParam String user, @RequestParam String pass) throws Exception {
		Object response;
		try {
			response = this.cuentaService.login(user, pass);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	

	@PutMapping("public/put/addWebUser")
	public ResponseEntity<?> PutUser(@RequestBody WebUser newuser , BindingResult result  ) throws Exception {
		if(result.hasErrors()) {
			return this.utils.validar(result);
		}
		Object response;
		try {
			response = this.cuentaService.add(newuser);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(response);
	}
	
	
	
	@PutMapping("public/put/imgperfil")
	public ResponseEntity<?> PutImgPerfil(@RequestParam MultipartFile file, @RequestParam String iduser) throws Exception {
		Object response;
		try {
			response = this.cuentaService.uploadImgPerfil(file,Long.parseLong(iduser));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(new Response(response));
	}
	
	
	
	@PutMapping("public/put/docIdentidad")
	public ResponseEntity<?> PutDocumentIdentidad(@RequestParam MultipartFile file, @RequestParam String iduser) throws Exception {
		Object response;
		try {
			response = this.cuentaService.uploadDocIdentidad(file,Long.parseLong(iduser));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(new Response(response));
	}
	
	@PutMapping("public/put/documentMatricula")
	public ResponseEntity<?> PutDocumentMatricula(@RequestParam MultipartFile fileDoc,@RequestParam MultipartFile fileVac, @RequestParam String iduser) throws Exception {
		Object response;
		try {
			response = this.cuentaService.uploadDocumenMatricula(fileDoc,fileVac,Long.parseLong(iduser));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(new Response(response));
	}
	
	
	
	
	@PostMapping("public/get/cursos")
	public ResponseEntity<?> getAllCursos() throws Exception {
		Object response;
		try {
			response = this.catalogoService.getAllCursos();
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	
	@PostMapping("public/get/materiaByCursos")
	public ResponseEntity<?> getMateriasByCurso(@RequestParam String idCurso) throws Exception {
		Object response;
		try {
			response = this.catalogoService.getActiveMateriaByCurso(Long.parseLong(idCurso));
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	@PutMapping("public/put/materiaByCursos")
	public ResponseEntity<?> putMateriasByCurso(@RequestBody Materias materia) throws Exception {
		Object response;
		try {
			response = this.catalogoService.putMateriaByCurso(materia);
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}

	
	
	
	@PostMapping("public/get/TipAct")
	public ResponseEntity<?> getTipAct() throws Exception {
		Object response;
		try {
			response = this.catalogoService.geTipActByActive();
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	
	@PostMapping("public/get/cursosToMatricula")
	public ResponseEntity<?> getCurstoTomatricula(@RequestParam String orde) throws Exception {
		Object response;
		try {
			response = this.catalogoService.getCursoToMatricula(Integer.parseInt(orde));
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	@PostMapping("public/get/studentByDocument")
	public ResponseEntity<?> getStudentByDocument(@RequestParam String document) throws Exception {
		Object response;
		try {
			response = this.cuentaService.findByDocument(document);
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	
}

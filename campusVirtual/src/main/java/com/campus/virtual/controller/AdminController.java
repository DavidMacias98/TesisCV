package com.campus.virtual.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.campus.virtual.models.AdminUser;
import com.campus.virtual.models.BadResponse;
import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.Response;
import com.campus.virtual.models.WebUser;
import com.campus.virtual.services.CuentaService;
import com.campus.virtual.services.OrdenPagoService;
import com.campus.virtual.services.PublicService;
import com.campus.virtual.services.RepresentanteService;
import com.campus.virtual.services.ServicesUtils;


@RestController

public class AdminController {
	
	
	
	@Autowired
	private CuentaService cuentaService;
	@Autowired
	private PublicService publicService;
	@Autowired
	private RepresentanteService repreService;
	@Autowired
	private ServicesUtils utils;
	@Autowired
	private OrdenPagoService  ordenService;
	
	@Autowired
	private PublicService  catalogoService;
	
	@PostMapping("admin/logers")
	public ResponseEntity<?> login(@RequestParam String user, @RequestParam String pass) throws Exception {
		Object response;
		try {
			response = this.cuentaService.adminlogin(user, pass);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(response);
	}
	

	@PutMapping("admin/put/addAdminUser")
	public ResponseEntity<?> PutUser(@RequestBody AdminUser newuser , BindingResult result  ) throws Exception {
		if(result.hasErrors()) {
			return this.utils.validar(result);
		}
		Object response;
		try {
			response = this.cuentaService.addAdminUser(newuser);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(new Response(response));
	}
	
	
	//////////////////////////SERVICIOS DE ADMINISTRADOR/////////////////////////////
	@PostMapping("admin/get/colabs")
	public ResponseEntity<?> getAllColabs() throws Exception {
		Object response;
		try {
			response = this.cuentaService.GetAllByRol();
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	@PostMapping("admin/get/colabsByCurso")
	public ResponseEntity<?> getColabsByCurso() throws Exception {
		Object response;
		try {
			response = this.cuentaService.getColabsToCurso();
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	@PostMapping("admin/get/cursos")
	public ResponseEntity<?> getAllCursos() throws Exception {
		Object response;
		try {
			response = this.catalogoService.getAllCursos();
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	@PostMapping("admin/put/cursos")
	public ResponseEntity<?> putCurso(@RequestBody CatalogoCursos curso , BindingResult result) throws Exception {
		Object response;
		try {
			response = this.catalogoService.putCursos(curso);
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	
	
	
	@PutMapping("admin/put/ColabsXCurso")
	public ResponseEntity<?> PutColabsXCurso(@RequestParam String idColab , @RequestParam String idCurso  ) throws Exception {
		
		Object response;
		try {
			response = this.publicService.ColabXcurso(Long.parseLong(idColab), Long.parseLong(idCurso) );
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(new Response(response));
	}
	
	
	@PostMapping("admin/get/webUserToValidate")
	public ResponseEntity<?> getStudentByRepreToMatricula() throws Exception {
		Object response;
		try {
			response = this.cuentaService.getStudentToValidate();
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(response);
	}
	

	@PutMapping("admin/put/validateStudent")
	public ResponseEntity<?> PutValidateStudent(@RequestParam String idStudent , @RequestParam String idLastCurso  ) throws Exception {
		
		Object response;
		try {
			response = this.cuentaService.validateStudent(Long.parseLong(idStudent), Long.parseLong(idLastCurso));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(response);
	}
	
	@PutMapping("admin/put/validateRepresentante")
	public ResponseEntity<?> PutValidateRepresentante(@RequestParam String idRepre  ) throws Exception {
		
		Object response;
		try {
			response = this.cuentaService.validateRepre(Long.parseLong(idRepre));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(response);
	}
	
	
	
	
	@PostMapping("admin/get/getAllOrdenToPagar")
	public ResponseEntity<?> getAllOrdenToPagar() throws Exception {
		Object response;
		try {
			response = this.ordenService.getAllToPagar();
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	@PutMapping("admin/put/putPagarOrden")
	public ResponseEntity<?> putPagarOrden(@RequestParam String idOrden) throws Exception {
		Object response;
		try {
			response = this.ordenService.pagar(Long.parseLong(idOrden));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(new Response(response));
	}
	
	
	@PutMapping("admin/put/switchActiveDocente")
	public ResponseEntity<?> putSwitchActiveDocente(@RequestParam String idDocente) throws Exception {
		Object response;
		try {
			response = this.cuentaService.switchActiveDocente(Long.parseLong(idDocente));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(new Response(response));
	}
	
	
	
	@PostMapping("admin/get/getRepresentanteConciliados")
	public ResponseEntity<?> getRepresentanteConciliados() throws Exception {
		Object response;
		try {
			response = this.cuentaService.getRepresentanteConciliados();
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	@PostMapping("admin/get/getStudentConciliados")
	public ResponseEntity<?> getStudentConciliados() throws Exception {
		Object response;
		try {
			response = this.cuentaService.getStudentConciliados();
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		
		return ResponseEntity.ok().body(response);
	}
	
	
	
	
	
}

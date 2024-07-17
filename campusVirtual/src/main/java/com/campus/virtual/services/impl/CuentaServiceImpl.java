package com.campus.virtual.services.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.campus.virtual.dto.OrdenPagoDTO;
import com.campus.virtual.models.AdminUser;
import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.OrdenPago;
import com.campus.virtual.models.WebUser;
import com.campus.virtual.models.WebUserAddress;
import com.campus.virtual.repository.CuentaAdminRepository;
import com.campus.virtual.repository.CuentaRepository;
import com.campus.virtual.repository.RepositoryOrder;
import com.campus.virtual.services.BlogStorageAzure;
import com.campus.virtual.services.CuentaService;

@Service
public class CuentaServiceImpl implements CuentaService {
	@Autowired
	private CuentaRepository cuentaRepo;
	@Autowired
	private CuentaAdminRepository cuentaAdminRepo;
	@Autowired
	private BlogStorageAzure storage;
	
	@Autowired
	private RepositoryOrder OrdenRepo;

	@Override
	public Object login(String usser, String pass) throws Exception {

		WebUser userLog = this.cuentaRepo.findByUsser(usser);
		if (userLog == null) {
			throw new Exception("Usuario: " + usser + " no existe");
		}
		if(userLog.getActivo()==false ) {
			throw new Exception("Usuario se encuentra desactivado");
		}
		
		if(userLog.getConciliado()==null || userLog.getConciliado()==false) {
			throw new Exception("Usuario no se encuentra aprobado");
		}
		if(!userLog.getPass().equals(pass)) {
			throw new Exception("Clave incorrecta ");
		}	
		return userLog;
	}


	@Override
	public WebUser findById(Long id)throws Exception {
	Optional<WebUser>op = this.cuentaRepo.findById(id);
		if(op.isEmpty()) {
			throw new Exception("cuenta no existe");
		}
		return op.get();
	}
	
	
	
	@Override
	public WebUser findByDocument(String document)throws Exception {
	WebUser user = this.cuentaRepo.findByDocument(document);
		
		return user;
	}
	
//	@Override
//	public WebUserAddress addAddress(WebUserAddress address)throws Exception {
//	Optional<WebUser>op = this.cuentaRepo.findById((Long.parseLong(address.getUsser())));
//		if(op.isEmpty()) {
//			throw new Exception("cuenta no existe");
//		}
//		WebUser focus =op.get();
//		if(focus.getActiveAddress()!=null) {
//			focus.getActiveAddress().setActivo(false);
//		}
//		address.setActivo(true);
//		focus.setActiveAddress(address);
//		
//		this.cuentaRepo.save(focus);
//		return focus.getActiveAddress();
//		//return ;
//	}

	@Override
	public Object add(WebUser newuser) throws Exception {
		System.out.println("documento nuevo"+newuser.getId());
		WebUser aux = null;
		String res;
//		if(newuser.getId()==null) {
//			res="Cuenta creada";
//		aux= this.cuentaRepo.findByUsser(newuser.getUsser());
//		if(aux!=null) {
//			throw new Exception("Usuario ya existe");
//		}
//		}else {
//			res="Cuenta Actualizada";
//			if(newuser.getPass()!=null) {
//				Optional <WebUser> op = this.cuentaRepo.findById(newuser.getId());
//				if(op==null) {
//					newuser.setPass(aux.getPass());
//				}
//			}
//			}	
		this.cuentaRepo.save(newuser);
		return newuser;
	}
	
	
	/////devuelve la url de la carga
	@Override
	@Transactional(rollbackFor = Exception.class)
	public Object uploadImgPerfil(MultipartFile file,Long iduser) throws Exception {
		Object response = null;
		 try {
		response=storage.upload(file, iduser+"perfil","multiplo");
		WebUser op = this.cuentaRepo.findById(iduser).get();
		System.out.println(op.getId());
		op.setImgPerfi(response.toString());
		this.cuentaRepo.save(op);
		 } catch (Exception e) {
		        // Manejo de la excepción
		        throw new Exception("Mensaje de error", e);
		    }
		return response;
	}
	
	
	@Override
	@Transactional(rollbackFor = Exception.class)
	public Object uploadDocIdentidad(MultipartFile file,Long iduser) throws Exception {
		Object response = null;
		 try {	
		response=storage.upload(file, iduser+"identidad","multiplo");
		WebUser op = this.cuentaRepo.findById(iduser).get();
		System.out.println(op.getId());
		op.setImgDoc(response.toString());
		this.cuentaRepo.save(op);
		 } catch (Exception e) {
		        // Manejo de la excepción
		        throw new Exception("Mensaje de error", e);
		    }
		return response;
	}
	
	
	@Override
	@Transactional(rollbackFor = Exception.class)
	public Object uploadDocumenMatricula(MultipartFile fileDoc,MultipartFile fileVac,Long iduser) throws Exception {
		Object responseDocument = null;
		Object responseVacuna = null;

		 try {
			 responseDocument=storage.upload(fileDoc, iduser+"Documento","multiplo");
				responseVacuna=storage.upload(fileVac, iduser+"Vacuna","multiplo");
				WebUser op = this.cuentaRepo.findById(iduser).get();
				
				op.setImgDoc(responseDocument.toString());
				op.setImgVac(responseVacuna.toString());
				this.cuentaRepo.save(op);
		    } catch (Exception e) {
		        // Manejo de la excepción
		        throw new Exception("Mensaje de error", e);
		    }
		
		return "ok";
	}
	
	
	public Object updateWebUser(Long iduser) {
		WebUser op = this.cuentaRepo.findById(iduser).get();
		
		op.setApe("nuevo");
		this.cuentaRepo.save(op);
		return "ok";
		
		
	}
	

	@Override
	public List<?> allWebUser() throws Exception {
		return this.cuentaRepo.getAllWebUser();
	}

	
	
	
	
	
	
	@Override
	public Object disableUser(Long id) throws Exception {
		String res;
		WebUser aux=null;
		aux=this.cuentaRepo.findById(id).get();
		if(aux.getActivo()==true) {
			aux.setActivo(false);
			res="Cuenta desactivada";
		}else {
			aux.setActivo(true);
			res= "Cuenta Activada";
		}
		
		this.cuentaRepo.save(aux);
		return res;
	}

	@Override
	public Object cambiarContrasena(Long id, String actual, String nueva, String repetir) throws Exception {
		WebUser usser=null;
		usser = this.findById(id);
		if(!usser.getPass().equals(actual)) {
			throw new Exception("Contraseña actual no coincide");
		}
		if(!nueva.equals(repetir)) {
			throw new Exception("Contraseña nueva no coincide");
		}
		
		usser.setPass(nueva);
		this.cuentaRepo.save(usser);
		return "Contraseña cambiada";
	}

	@Override
	public List<WebUser> getStudentByRepre(Long idRpre) throws Exception {
		// TODO Auto-generated method stub
		return this.cuentaRepo.getStudentByRepre(idRpre);
	}
	@Override
	public List<?> getStudentByRepreToMatricula(Long idRpre) throws Exception {
	
		
		return this.cuentaRepo.getStudentByRepreToMatricula(idRpre);
	}

	
	//////////////////////////////////servicios admin//////////////////////
	
	
	@Override
	public Object adminlogin(String usser, String pass) throws Exception {

		AdminUser userLog = this.cuentaRepo.findByUsserAdmin(usser);
		if (userLog == null) {
			throw new Exception("Usuario: " + usser + " no existe");
		}
		if(userLog.getActivo()==false ) {
			throw new Exception("Usuario se encuentra desactivado");
		}
		if(!userLog.getPass().equals(pass)) {
			throw new Exception("Clave incorrecta ");
		}
		
		if(userLog.getRol().equals("docente")) {
			if(userLog.getCurso()==null) {
				throw new Exception("DOCENTE NO TIENE CURSO ASIGNADO");
			}
		}
		
		
		return userLog;
	}
	
	@Override
	public Object addAdminUser(AdminUser newuser) throws Exception {
		WebUser aux = null;
		String res;
		if(newuser.getId()==null) {
			res="Cuenta creada";
		aux= this.cuentaRepo.findByUsser(newuser.getUsser());
		if(aux!=null) {
			throw new Exception("Usuario ya existe");
		}
		}else {
			res="Cuenta Actualizada";
			if(newuser.getPass()!=null) {
				Optional <WebUser> op = this.cuentaRepo.findById(newuser.getId());
				if(op==null) {
					newuser.setPass(aux.getPass());
				}
			}
			}	
		this.cuentaAdminRepo.save(newuser);
		return res;
	}
	
	
	@Override
	public List<?> GetAllByRol() throws Exception {
		
		return this.cuentaAdminRepo.GetAllByRol();
	}
	
	@Override
	public List<?> getColabsToCurso() throws Exception {
		
		return this.cuentaAdminRepo.getColabsToCurso();
	}


	
	
	@Override
	public List<?> getStudentToValidate() throws Exception {
		// TODO Auto-generated method stub
		return this.cuentaRepo.getWebUserToValidate();
	}


	@Override
	public Object validateStudent(Long idStudent, Long idLastCurso) throws Exception {
		
		WebUser student= new WebUser();
		student = this.cuentaRepo.findById(idStudent).get();
		student.setConciliado(true);
		student.setLastCurso(CatalogoCursos.builder().id(idLastCurso).build());
		return this.cuentaRepo.save(student);
	}
	
	@Override
	public Object validateRepre(Long idStudent) throws Exception {
		WebUser repre= new WebUser();
		repre = this.cuentaRepo.findById(idStudent).get();
		repre.setConciliado(true);
		return this.cuentaRepo.save(repre);
	}



	@Override
	public Object invalidateStudet(Long idStudent, String comentario) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public Object switchActiveDocente(Long usser) throws Exception {
		AdminUser docente=new AdminUser();
		docente= this.cuentaAdminRepo.findById(usser).get();
		docente.setActivo(!docente.getActivo());
		return this.cuentaAdminRepo.save(docente);
	}


	@Override
	public Object deleteColabsToCurso(Long idAdminUser) throws Exception {
		AdminUser docente=new AdminUser();
		docente= this.cuentaAdminRepo.findById(idAdminUser).get();
		docente.setCurso(null);
		return this.cuentaAdminRepo.save(docente);
	}


	@Override
	public  List<WebUser> getRepresentanteConciliados() throws Exception {		
		return this.cuentaRepo.getRepresentanteConciliados();
	}
	
	@Override
	public  List<WebUser> getStudentConciliados(Long idCurso) throws Exception {	
		
		return this.cuentaRepo.getStudentConciliados(idCurso);
	}
	
	@Override
	public  List<WebUser> getStudentConciliadosForAdmin() throws Exception {	
		
		return this.cuentaRepo.getStudentConciliadosForAdmin();
	}
	
	
	
	
	

}

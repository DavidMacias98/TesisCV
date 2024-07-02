package com.campus.virtual.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.campus.virtual.models.AdminUser;
import com.campus.virtual.models.WebUser;
import com.campus.virtual.models.WebUserAddress;


public interface CuentaService {

	
	Object login (String usser, String pass)throws Exception;
	Object add(WebUser newuser)throws Exception;
	Object uploadImgPerfil(MultipartFile file,Long iduser)throws Exception;
	
	Object uploadDocIdentidad(MultipartFile file,Long iduser)throws Exception;
	
	Object uploadDocumenMatricula(MultipartFile fileDoc,MultipartFile fileVac,Long iduser)throws Exception;
	Object cambiarContrasena(Long id , String actual, String nueva, String repetir)throws Exception;
	
	WebUser findById(Long id)throws Exception;
	WebUser findByDocument(String document)throws Exception;
	List<WebUser> getStudentByRepre(Long id)throws Exception;
	List<?> getStudentByRepreToMatricula(Long id)throws Exception;
	//WebUserAddress addAddress (WebUserAddress address)throws Exception;
	List<?> allWebUser()throws Exception;
	Object disableUser(Long id)throws Exception;
	
	List<?> getStudentToValidate()throws Exception;
	
	
	///////////servicios admin
	Object adminlogin (String usser, String pass)throws Exception;
	Object addAdminUser(AdminUser newuser)throws Exception;

	List<?> GetAllByRol()throws Exception;
	List<?> getColabsToCurso()throws Exception;
	Object deleteColabsToCurso(Long idAdminUser)throws Exception;
	
	
	Object validateStudent(Long idStudent, Long idLastCurso)throws Exception;
	Object validateRepre(Long idStudent)throws Exception;
	
	
	Object invalidateStudet(Long idStudent, String comentario)throws Exception;
	
	Object switchActiveDocente (Long usser)throws Exception;
	
	Object getRepresentanteConciliados ()throws Exception;
	Object getStudentConciliados ()throws Exception;
	
	
}
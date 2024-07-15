package com.campus.virtual.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.campus.virtual.models.AdminUser;
import com.campus.virtual.models.WebUser;

public interface CuentaRepository extends JpaRepository<WebUser, Long>{

	
	@Query("select u from WebUser u where u.usser = :usser")
	WebUser findByUsser(String usser);
	
	@Query("select u from WebUser u where u.document = :document")
	WebUser findByDocument(String document);
	
	@Query("select u from AdminUser u where u.usser = :usser")
	AdminUser findByUsserAdmin(String usser);

	
	@Query("select u from WebUser u where u.rol <> 'admin'")
	List<WebUser> getAllWebUser();
	
	@Query("select u from WebUser u where u.idRepre.id = :repre")
	List<WebUser> getStudentByRepre(Long repre);
	
	@Query("select u from WebUser u where u.idRepre.id = :repre and u.isMatriculate=false and conciliado =true ")
	List<WebUser> getStudentByRepreToMatricula(Long repre);
	
	
	@Query("select u from WebUser u where u.rol in ('student','repre')  and u.conciliado is null ")
	List<WebUser> getWebUserToValidate();
	
	
	
	@Query("select u from WebUser u where u.rol in ('repre') and u.conciliado =true ")
	List<WebUser> getRepresentanteConciliados();
	
	@Query("select u from WebUser u where u.rol in ('student') and u.conciliado =true ")
	List<WebUser> getStudentConciliados();
		
	
	
	
}

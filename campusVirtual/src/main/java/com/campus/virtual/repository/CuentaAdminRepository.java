package com.campus.virtual.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.campus.virtual.models.AdminUser;
import com.campus.virtual.models.WebUser;

public interface CuentaAdminRepository extends JpaRepository<AdminUser, Long>{

	

	/////////////////////admin////////////////
	@Query("select u from AdminUser u where u.rol != 'admin'")
	List<AdminUser>  GetAllByRol();
	
	
	@Query("select u from AdminUser u where u.rol = 'docente' ")
	List<AdminUser>  getColabsToCurso();
	
}

package com.campus.virtual.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.OrdenPago;
import com.campus.virtual.models.WebUser;

public interface RepositoryOrder extends JpaRepository<OrdenPago, Long>{


		@Query("select u from OrdenPago u where u.representante.id = :id")
		List<?>	findByRepresentante(Long id);
		
		
		
		@Query("select u from OrdenPago u where u.curso.id = :curso and u.status=2")
		List<?> findByCurso(Long curso);
		
		@Query("select u from OrdenPago u where u.status.id = 1")
		List<?> getAllToPagar();
		
		
		
}

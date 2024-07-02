package com.campus.virtual.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.campus.virtual.models.Asistencias;
import com.campus.virtual.models.AsistenciasDetalles;
import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.WebUser;

public interface AsistenciasDetalleRepository extends JpaRepository<AsistenciasDetalles, Long>{


	
	
	
	
	@Query("select a from AsistenciasDetalles a where a.assists.id = :idassists order by a.student.name asc")
	List<?> getAssistsByCurso(Long idassists);
	
	@Query("select a from AsistenciasDetalles a where a.student.id =:idStudent  ")
	List<?> getAssistsByStudent(Long idStudent);
	
	@Query("select count(a) from AsistenciasDetalles a where a.student.id =:idStudent")
	int getCountAssisByStudent(Long idStudent);
	
	@Query("select count(a) from AsistenciasDetalles a where a.student.id =:idStudent and a.present=true")
	int getCountAssisTrueByStudent(Long idStudent);
	
	
	
}

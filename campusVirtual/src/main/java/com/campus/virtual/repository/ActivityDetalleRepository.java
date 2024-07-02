package com.campus.virtual.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.campus.virtual.models.ActivityDetalles;
import com.campus.virtual.models.Asistencias;
import com.campus.virtual.models.AsistenciasDetalles;
import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.WebUser;

public interface ActivityDetalleRepository extends JpaRepository<ActivityDetalles, Long>{


	//@Query("select a from ActivityDetalles a where a.assists.id = :idassists order by a.student.name asc")
	//List<?> getActivityByCurso(Long idassists);
	
	@Query("select a from ActivityDetalles a where a.activity.id=:idActivity ")
	List<?> getActivityDetalleByActivity(Long idActivity);
	
	///////////////////student/////////////
	@Query("select a from ActivityDetalles a where a.student.id=:idStudent ")
	List<?> getActivityByStudent(Long idStudent);
	
	
	
	
	@Query("select a.activity.materia from ActivityDetalles a where a.student.id=:idStudent group by a.activity.materia ,a.student ")
	List<?> getMateriasActByStudent(Long idStudent);
	
	@Query("select AVG(a.calificacion) from ActivityDetalles a where a.activity.materia.id=:idMateria")
	BigDecimal getPromByMateria(Long idMateria);
	
	@Query("select AVG(a.calificacion) from ActivityDetalles a where a.activity.materia.id=:idMateria and a.activity.tipo=1")
	BigDecimal getPromTallerGrupalByMateria(Long idMateria);
	@Query("select AVG(a.calificacion) from ActivityDetalles a where a.activity.materia.id=:idMateria and a.activity.tipo=2")
	BigDecimal getPromTallerIndByMateria(Long idMateria);
	@Query("select AVG(a.calificacion) from ActivityDetalles a where a.activity.materia.id=:idMateria and a.activity.tipo=3")
	BigDecimal getPromTareaByMateria(Long idMateria);
	@Query("select AVG(a.calificacion) from ActivityDetalles a where a.activity.materia.id=:idMateria and a.activity.tipo=4")
	BigDecimal getPromLeccionByMateria(Long idMateria);
	@Query("select AVG(a.calificacion) from ActivityDetalles a where a.activity.materia.id=:idMateria and a.activity.tipo=5")
	BigDecimal getPromExamByMateria(Long idMateria);
}

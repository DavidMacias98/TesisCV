package com.campus.virtual.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.CatalogoEstados;
import com.campus.virtual.models.Materias;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CalificacionesDTO {

	private Materias materia;
	private BigDecimal promTallerGrupal;

	private BigDecimal promTallerInv;

	private BigDecimal promTarea;
	
	private BigDecimal promLeccion;

	private BigDecimal Examen;
	
	private BigDecimal promMateria;
	
	
}

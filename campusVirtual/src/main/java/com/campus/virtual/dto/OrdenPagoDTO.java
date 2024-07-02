package com.campus.virtual.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.CatalogoEstados;
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
public class OrdenPagoDTO {
	
	private Long id;
	private String codigo;
	private String nameRepre;
	private Long cedulaRepre;
	private String nameStudent;
	private Long cedulaStudent;
	private CatalogoCursos curso;
	@JsonFormat(pattern = "DD-MM-YYYY")
	private LocalDateTime fechaCreada;
	@JsonFormat(pattern = "DD-MM-YYYY")
	private LocalDate fechaMaxPago;
	private BigDecimal total;
	private CatalogoEstados status;
	
	
}

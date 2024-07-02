package com.campus.virtual.models;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "OrdenPago", schema = "campus")

public class OrdenPago {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "codigo")
	private String codigo;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="representante")
	private WebUser representante;
	
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="idEstudiante")
	private WebUser estudiante;
	
	@OneToOne
	@JoinColumn(name="curso")
	private CatalogoCursos curso;
	
	@JsonFormat(pattern = "DD-MM-YYYY")
	private LocalDateTime fechaCreada;
	
	@JsonFormat(pattern = "DD-MM-YYYY")
	private LocalDate fechaMaxPago;
	
	@Column(name = "total")
	private BigDecimal total;
	
	@OneToOne
	@JoinColumn(name = "status")
	private CatalogoEstados status;
	
	
	@Column(name = "aceptaLicitudFondos")
	private Boolean aceptaLicitudFondos;
	
	@PrePersist
	public void prepersist() {
		
		this.fechaCreada = LocalDateTime.now();
		this.fechaMaxPago=LocalDate.now().plusDays(15);
		this.total= BigDecimal.ZERO;
		//this.codigo= this.representante.getName().substring(0,2)+ this.estudiante.getName().substring(0,2)+this.curso.getName().substring(0,2);
	}
	
	
	
	
}
